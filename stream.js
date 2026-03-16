// ─────────────────────────────────────────
//  sections/audio.js
//  Standalone audio player section.
//  All audio state and logic lives here —
//  completely separate from live.js.
// ─────────────────────────────────────────

// Waveform height data per track (30 bars each)
const WAVE_DATA = [
  [8,14,20,28,22,16,30,24,18,12,26,20,14,22,18,28,24,16,20,12,18,26,22,14,28,20,16,24,18,22],
  [12,20,26,18,30,22,14,28,20,16,24,10,22,28,18,24,16,20,14,26,22,18,28,20,12,24,16,22,18,26],
  [16,24,18,28,22,14,20,26,18,12,28,22,16,24,20,18,26,14,22,20,16,28,24,18,22,16,20,26,14,24],
  [10,18,26,20,14,28,22,16,24,18,22,28,14,20,26,18,24,16,22,20,28,14,18,26,22,16,20,14,24,18],
  [14,22,28,16,24,20,18,26,22,14,20,28,24,16,22,18,26,20,14,24,18,22,28,16,20,24,18,26,14,22],
  [11,19,25,17,29,21,15,27,19,13,23,17,21,27,17,23,15,21,13,25,21,17,27,19,11,23,15,21,17,25],
];

// Player state — scoped to this file
let audioPlaying  = -1;
let audioRaf      = null;
let audioProgress = [];
let audioLastTs   = null;
const audioEls    = {};  // Audio objects stored here, never in the DOM

function renderAudio() {
  const { tracks } = SITE_DATA;

  audioProgress = new Array(tracks.length).fill(0);

  const rowsHTML = tracks.map((t, i) => `
    <div class="audio-row" data-track="${i}">
      <button class="audio-row__play" id="aBtn${i}" aria-label="Play ${t.name}">
        <div class="play-tri play-tri--audio"></div>
      </button>
      <div class="audio-row__info">
        <div class="audio-row__title">${t.name}</div>
        <div class="audio-row__sub">Rosie Crown · 2025</div>
      </div>
      <div class="audio-row__wave" id="aWave${i}"></div>
      <div class="audio-row__dur">${t.duration}</div>
    </div>
  `).join("");

  document.getElementById("audio-root").innerHTML = `
    <section class="audio-section" id="audio">
      <div class="audio-section__top">
        <div>
          <div class="section-label section-label--dark">Listen</div>
          <h2 class="audio-section__heading">Original <em>Music</em></h2>
        </div>
        <span class="audio-section__sub">Rosie Crown · 2025</span>
      </div>
      <div class="audio-list">${rowsHTML}</div>
    </section>
  `;

  // Build waveform bars for each track
  tracks.forEach((_, i) => {
    const waveEl = document.getElementById("aWave" + i);
    if (!waveEl) return;
    WAVE_DATA[i % WAVE_DATA.length].forEach((h, j) => {
      const bar = document.createElement("div");
      bar.className = "wave-bar";
      bar.id = `wb${i}_${j}`;
      bar.style.height = h + "px";
      waveEl.appendChild(bar);
    });
  });

  // Pre-create all Audio objects — stored in audioEls, never the DOM.
  // This ensures getElementById is never needed and avoids the
  // "null on second play" bug on GitHub Pages / mobile Safari.
  tracks.forEach((t, i) => {
    if (!t.audioSrc) return;
    const el = new Audio(t.audioSrc);
    el.preload = "metadata";
    el.addEventListener("ended", () => {
      resetAudioBtn(i);
      audioProgress[i] = 0;
      audioPlaying = -1;
    });
    audioEls[i] = el;
  });

  // Attach click to the play button only — NOT the whole row.
  // If the listener is on the row, clicking the button fires it
  // twice (button + bubble), which starts two copies overlapping.
  document.querySelectorAll(".audio-row__play").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const row = btn.closest(".audio-row");
      const idx = parseInt(row.dataset.track, 10);
      toggleAudio(idx);
    });
  });
}

// Hard-stop a track and reset its UI
function stopAudio(idx) {
  const el = audioEls[idx];
  if (el) {
    el.pause();
    el.currentTime = 0;
  }
  if (audioRaf) {
    cancelAnimationFrame(audioRaf);
    audioRaf = null;
  }
  resetAudioBtn(idx);
}

// Play a track, or stop it if it's already playing
function toggleAudio(idx) {
  // Same track — pause and stop
  if (audioPlaying === idx) {
    stopAudio(idx);
    audioPlaying = -1;
    return;
  }

  // Different track — stop the current one first
  if (audioPlaying !== -1) {
    stopAudio(audioPlaying);
  }

  // Start the new track from the beginning
  const el = audioEls[idx];
  if (el) {
    el.currentTime = 0;
    el.play().catch(err => console.warn("Playback blocked:", err));
  }

  audioPlaying = idx;
  audioLastTs  = null;
  setAudioActiveBtn(idx);
  audioRaf = requestAnimationFrame(tickAudio);
}

// Reset button back to play triangle
function resetAudioBtn(idx) {
  const btn = document.getElementById("aBtn" + idx);
  if (btn) {
    btn.classList.remove("active");
    btn.innerHTML = `<div class="play-tri play-tri--audio"></div>`;
  }
  for (let j = 0; j < 30; j++) {
    const bar = document.getElementById(`wb${idx}_${j}`);
    if (bar) bar.classList.remove("lit");
  }
}

// Set button to pause state
function setAudioActiveBtn(idx) {
  const btn = document.getElementById("aBtn" + idx);
  if (btn) {
    btn.classList.add("active");
    btn.innerHTML = `<div class="pause-bars"><div class="pause-bar"></div><div class="pause-bar"></div></div>`;
  }
}

// Waveform animation — syncs to actual playback position
function tickAudio(ts) {
  if (audioPlaying === -1) return;
  if (!audioLastTs) audioLastTs = ts;
  const dt = (ts - audioLastTs) / 1000;
  audioLastTs = ts;

  const el = audioEls[audioPlaying];
  if (el && el.duration) {
    audioProgress[audioPlaying] = el.currentTime / el.duration;
  } else {
    audioProgress[audioPlaying] = (audioProgress[audioPlaying] + dt * 0.11) % 1;
  }

  const active = Math.floor(audioProgress[audioPlaying] * 30);
  for (let j = 0; j < 30; j++) {
    const bar = document.getElementById(`wb${audioPlaying}_${j}`);
    if (bar) bar.classList.toggle("lit", j <= active);
  }

  audioRaf = requestAnimationFrame(tickAudio);
}
