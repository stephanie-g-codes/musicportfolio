// ─────────────────────────────────────────
//  sections/nav.js
// ─────────────────────────────────────────

function renderNav() {
  const { artist, nav: links } = SITE_DATA;

  const linksHTML = links.map(l =>
    `<li><a href="${l.href}">${l.label}</a></li>`
  ).join("");

  const mobileLinksHTML = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join("");

  document.getElementById("nav-root").innerHTML = `
    <nav class="nav" id="mainNav">
      <a href="#" class="nav__logo">${artist.name.toLowerCase()}</a>
      <ul class="nav__links">${linksHTML}</ul>
      <button class="nav__hamburger" id="hamburger" aria-label="Open menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="nav__mobile-menu" id="mobileMenu">
      ${mobileLinksHTML}
    </div>
  `;

  // Hamburger toggle
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  // Close mobile menu on link click
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}
