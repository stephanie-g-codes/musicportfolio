// ─────────────────────────────────────────
//  sections/footer.js
// ─────────────────────────────────────────

function renderFooter() {
  const { artist, socials } = SITE_DATA;
  const year = new Date().getFullYear();

  const socialsHTML = socials.map(s =>
    `<li><a href="${s.href}" target="_blank" rel="noopener noreferrer">${s.label}</a></li>`
  ).join("");

  document.getElementById("footer-root").innerHTML = `
    <footer class="footer">
      <a href="#home" class="footer__logo">${artist.name.toLowerCase()}</a>
      <ul class="footer__links">${socialsHTML}</ul>
      <span class="footer__copy">© ${year} ${artist.name}</span>
    </footer>
  `;
}
