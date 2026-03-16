// ─────────────────────────────────────────
//  sections/live.js
//  Handles: video tab filtering and
//  video card rendering only.
//  Audio player lives in audio.js.
// ─────────────────────────────────────────

function renderLive() {
  const { videos } = SITE_DATA;

  // Build video card HTML
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
          <div class="video-card__meta">${v.meta || ""}</div>
        </div>
      </div>
    `;
  }

  // Build a tab panel
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

  // Inject HTML
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

      <div class="live__view-more">
        <button class="btn-outline-dark">View all performances</button>
      </div>

    </section>
  `;

  // Tab switching
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      document.getElementById("tab-" + tabId).classList.add("active");
      btn.classList.add("active");
    });
  });

  // Video card click → YouTube embed
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
}
