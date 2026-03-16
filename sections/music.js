// ─────────────────────────────────────────
//  sections/music.js
// ─────────────────────────────────────────

function renderMusic() {
  const { tracks, ep } = SITE_DATA;

  const tracksHTML = tracks.map(t => `
    <li class="track">
      <div class="track__left">
        <span class="track__num">${t.num}</span>
        <span class="track__name">${t.name}</span>
        ${t.badge ? `<span class="track__badge">${t.badge}</span>` : ""}
      </div>
      <span class="track__time">${t.duration}</span>
    </li>
  `).join("");

  document.getElementById("music-root").innerHTML = `
    <section class="music" id="music">

      <div class="music__left">
        <div class="section-label section-label--light">Latest Release</div>
        // <h2 class="music__title">Debut EP<br><em>${ep.title.replace(" EP","")}</em></h2>
        // <p class="music__body">Six tracks woven from late-night reverie — soft textures, honest words, and the gentle ache of almost-memories.</p>
        <ul class="track-list">${tracksHTML}</ul>
      </div>

      <div class="music__right">
        <div class="music__album-art">
          <div class="music__rings">
            <div class="ring ring--lg"></div>
            <div class="ring ring--md"></div>
            <div class="ring__core"></div>
          </div>
          <span class="music__album-script">snooze</span>
        </div>
        <div class="music__album-caption">
          <div class="music__album-title">${ep.title}</div>
          <div class="music__album-sub">${ep.sub}</div>
        </div>
      </div>

    </section>
  `;
}
