// ─────────────────────────────────────────
//  sections/hero.js
// ─────────────────────────────────────────

function renderHero() {
  const { artist } = SITE_DATA;
  const [firstName, ...rest] = artist.name.split(" ");

  document.getElementById("hero-root").innerHTML = `
    <section class="hero" id="home">

      <div class="hero__visual-col">
        <img src="assets/images/hero.png" alt="${artist.name}" class="hero__photo" />
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
