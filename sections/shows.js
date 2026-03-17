// ─────────────────────────────────────────
//  sections/shows.js
// ─────────────────────────────────────────

function renderShows() {
  const { shows } = SITE_DATA;

  const rowsHTML = shows.length
    ? shows.map(s => `
        <li class="show-row">
          <div class="show-row__left">
            <div class="show-row__venue">${s.venue}</div>
            <div class="show-row__time">${s.time}</div>
          </div>
          <div class="show-row__date">${s.date}</div>
        </li>
      `).join("")
    : `<p class="shows__empty">No upcoming shows — check back soon.</p>`;

  document.getElementById("shows-root").innerHTML = `
    <section class="shows" id="shows">
      <div class="shows__top">
        <div>
          <div class="section-label section-label--light">Live Dates</div>
          <h2 class="shows__heading">Upcoming <em>Shows</em></h2>
        </div>
        <span class="shows__count">${shows.length} upcoming</span>
      </div>
      <ul class="show-list">${rowsHTML}</ul>
    </section>
  `;
}
