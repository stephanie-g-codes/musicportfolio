// ─────────────────────────────────────────
//  sections/about.js
// ─────────────────────────────────────────

function renderAbout() {
  const { artist, chips } = SITE_DATA;

  const chipsHTML = chips.map(c => `<div class="chip">${c}</div>`).join("");

  document.getElementById("about-root").innerHTML = `
    <section class="about" id="about">

      <div class="about__left">
        <div class="section-label section-label--dark">About</div>
        <div class="about__monogram">RC</div>
      </div>

      <div class="about__right">
        <h2 class="about__heading">
          Music that lives in the<br>
          <em>space between waking</em><br>
          and dreaming
        </h2>
        <p class="about__body">${artist.bio}</p>
        <div class="about__chips">${chipsHTML}</div>
      </div>

    </section>
  `;
}
