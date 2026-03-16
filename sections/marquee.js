// ─────────────────────────────────────────
//  sections/marquee.js
// ─────────────────────────────────────────

function renderMarquee() {
  const { marqueeItems } = SITE_DATA;

  // Double items so seamless loop works
  const allItems = [...marqueeItems, ...marqueeItems];
  const itemsHTML = allItems.map(item =>
    `<span class="marquee__item">${item} <span class="marquee__dot">◦</span></span>`
  ).join("");

  document.getElementById("marquee-root").innerHTML = `
    <div class="marquee">
      <div class="marquee__track">${itemsHTML}</div>
    </div>
  `;
}
