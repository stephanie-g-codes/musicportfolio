// ─────────────────────────────────────────
//  sections/live.js
//  Handles: video tab filtering, video
//  card rendering, and audio player.
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

// Audio player state
let audioPlaying = -1;
let audioRaf     = null;
let audioProgress = [];
let audioLastTs   = null;

function renderLive() {
  const { videos, tracks } = SITE_DATA;

  audioProgress = new Array(tracks.length).fill(0);

  // ── Build video card HTML ─────────────────
  function videoCardHTML(v, featured = false) {
    const platformMap = {
      youtube:   { cls: "yt", label: "YouTube"   },
      instagram: { cls: "ig", label: "Instagram" },
      tiktok:    { cls: "tt", label: "TikTok"    },
    };
    const p    = platformMap[v.platform];
    const size = featured ? "lg" : "sm";

    return `
      <div class="video-card${featured ? " featured" : ""}" data-id="${v.id}" data-embed="${v.embedId || ""}">
        <div class="video-card__thumb">
          <div class="video-card__bg" style="background:${v.bgColor};"></div>
          <div class="video-card__bg-label" style="font-size:${featured ? "80px" : "36px"};">${v.bgLabel}</div>
          <div class="play-ring play-ring--${size}">
            <div class="play-dot play-dot--${size}">
              <div class="play-tri play-tri--${size}"></div>
            </div>
          </div>
        </div>
        <div class="video-card__info">
          <div class="platform-badge platform-badge--${p.cls}">
            <span class="platform-dot platform-dot--${p.cls}"></span>
            ${p.label}
          </div>
          <div class="video-card__title video-card__title--${size}">${v.title}</div>
          <div class="video-card__meta">${v.meta}</div>
        </div>
      </div>
    `;
  }

  // ── Build tab panels ──────────────────────
  function buildPanel(id, filteredVideos, useFeaturedGrid) {
    const gridClass = useFeaturedGrid ? "video-grid--featured" : "video-grid--3col";
    const cards = filteredVideos.map((v, i) =>
      videoCardHTML(v, useFeaturedGrid && i === 0)
    ).join("");
    return `<div id="tab-${id}" class="tab-panel${id === "all" ? " active" : ""}">
      <div class="${gridClass}">${cards}</div>
    </div>`;
  }

  const allVideos = videos;
  const ytVideos  = videos.filter(v => v.platform === "youtube");
  const igVideos  = videos.filter(v => v.platform === "instagram");
  const ttVideos  = videos.filter(v => v.platform === "tiktok");

  // ── Audio rows ────────────────────────────
  const audioRowsHTML = tracks.map((t, i) => `
    <div class="audio-row" data-track="${i}">
      <button class="audio-row__play" id="aBtn${i}" aria-label="Play ${t.name}">
        <div class="play-tri play-tri--audio"></div>
      </button>
      <div class="audio-row__info">
        <div class="audio-row__title">${t.name}</div>
        <div class="audio-row__sub">Debut EP · 2025</div>
      </div>
      <div class="audio-row__wave" id="aWave${i}"></div>
      <div class="audio-row__dur">${t.duration}</div>
    </div>
  `).join("");

  // ── Inject HTML ───────────────────────────
  document.getElementById("live-root").innerHTML = `
    <section class="live" id="live">

      <div class="live__top">
        <div>
          <div class="section-label section-label--dark">Live &amp; Media</div>
          <h2 class="live__heading">Watch &amp; <em>Listen</em></h2>
        </div>
        <div class="tab-row">
          <button class="tab-btn active" data-tab="all">All</button>
          <button class="tab-btn" data-tab="youtube">YouTube</button>
          <button class="tab-btn" data-tab="instagram">Instagram</button>
          <button class="tab-btn" data-tab="tiktok">TikTok</button>
        </div>
      </div>

      ${buildPanel("all",       allVideos, true)}
      ${buildPanel("youtube",   ytVideos,  false)}
      ${buildPanel("instagram", igVideos,  false)}
      ${buildPanel("tiktok",    ttVideos,  false)}

      <div class="live__divider"></div>
      <div class="audio__label">Audio · Listen Now</div>
      <div class="audio-list">${audioRowsHTML}</div>

      <div class="live__view-more">
        <button class="btn-outline-dark">View all performances</button>
      </div>

    </section>
  `;

  // ── Tab switching ─────────────────────────
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.getElementById("tab-" + tabId).classList.add("active");
      btn.classList.add("active");
    });
  });

  // ── Video card click → embed ──────────────
  document.querySelectorAll(".video-card").forEach(card => {
    card.addEventListener("click", () => {
      const embedId = card.dataset.embed;
      if (!embedId) return;
      const thumb = card.querySelector(".video-card__thumb");
      thumb.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${embedId}?autoplay=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="position:absolute;inset:0;width:100%;height:100%;">
        </iframe>
      `;
      thumb.style.padding = "0";
    });
  });

  // ── Build waveforms ───────────────────────
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

  // ── Audio player ──────────────────────────
  document.querySelectorAll(".audio-row").forEach(row => {
    row.addEventListener("click", () => {
      const idx = parseInt(row.dataset.track, 10);
      toggleAudio(idx);
    });
  });
}

function toggleAudio(idx) {
  const { tracks } = SITE_DATA;

  if (audioPlaying === idx) {
    // Pause
    audioPlaying = -1;
    if (audioRaf) cancelAnimationFrame(audioRaf);
    resetAudioBtn(idx);
    return;
  }

  // Stop previous
  if (audioPlaying !== -1) resetAudioBtn(audioPlaying);

  // If real audio src exists, play it
  const track = tracks[idx];
  if (track.audioSrc) {
    let audioEl = document.getElementById("audioEl_" + idx);
    if (!audioEl) {
      audioEl = new Audio(track.audioSrc);
      audioEl.id = "audioEl_" + idx;
    }
    audioEl.play().catch(() => {});
  }

  audioPlaying = idx;
  audioLastTs  = null;
  setAudioActiveBtn(idx);
  audioRaf = requestAnimationFrame(tickAudio);
}

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

function setAudioActiveBtn(idx) {
  const btn = document.getElementById("aBtn" + idx);
  if (btn) {
    btn.classList.add("active");
    btn.innerHTML = `<div class="pause-bars"><div class="pause-bar"></div><div class="pause-bar"></div></div>`;
  }
}

function tickAudio(ts) {
  if (audioPlaying === -1) return;
  if (!audioLastTs) audioLastTs = ts;
  const dt = (ts - audioLastTs) / 1000;
  audioLastTs = ts;

  audioProgress[audioPlaying] = (audioProgress[audioPlaying] + dt * 0.11) % 1;
  const active = Math.floor(audioProgress[audioPlaying] * 30);

  for (let j = 0; j < 30; j++) {
    const bar = document.getElementById(`wb${audioPlaying}_${j}`);
    if (bar) bar.classList.toggle("lit", j <= active);
  }

  audioRaf = requestAnimationFrame(tickAudio);
}
