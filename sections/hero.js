// ─────────────────────────────────────────
//  sections/hero.js
// ─────────────────────────────────────────

function renderHero() {
  const { artist } = SITE_DATA;
  const [firstName, ...rest] = artist.name.split(" ");

  document.getElementById("hero-root").innerHTML = `
    <section class="hero" id="home">

      <div class="hero__visual-col">
        <!--
          TO ADD YOUR PHOTO:
          Replace the div below with:
          <img src="assets/images/hero.jpg" alt="${artist.name}" class="hero__photo" />
        -->
        <div class="hero__visual">
          <div class="hero__visual-inner">
            <div class="hero__blob"></div>
            <div class="hero__vline"></div>
            <span class="hero__script">snooze</span>
          </div>
        </div>
      </div>

      <div class="hero__text-col">
        <p class="hero__eyebrow">${artist.tagline}</p>
        <h1 class="hero__title">
          ${firstName}<br>
          <em>${rest.join(" ")}</em>
        </h1>
        <p class="hero__desc">${artist.heroSubtitle}</p>
        <div class="hero__cta">
          <button class="btn-primary" onclick="document.querySelector('#music').scrollIntoView({behavior:'smooth'})">
            Listen Now
          </button>
          <button class="btn-ghost" onclick="document.querySelector('#booking').scrollIntoView({behavior:'smooth'})">
            Request Booking
          </button>
        </div>
        <span class="hero__scroll-hint">Scroll</span>
      </div>

    </section>
  `;
}
