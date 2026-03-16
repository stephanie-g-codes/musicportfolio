// ─────────────────────────────────────────
//  js/main.js
//  App initialisation — runs after all
//  section scripts have loaded.
// ─────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {

  // Render each section
  renderNav();
  renderHero();
  renderMarquee();
  renderLive();
  // renderMusic();
  renderAbout();
  renderBooking();
  renderFooter();

  // Sticky nav shrink on scroll
  const nav = document.querySelector(".nav");
  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 60);
    }, { passive: true });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
