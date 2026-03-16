// ─────────────────────────────────────────
//  sections/booking.js
// ─────────────────────────────────────────

function renderBooking() {
  const { bookingDetails } = SITE_DATA;

  const detailsHTML = bookingDetails.map(d => `
    <div class="booking-detail">
      <div class="booking-detail__label">${d.label}</div>
      <div class="booking-detail__value">${d.value}</div>
    </div>
  `).join("");

  document.getElementById("booking-root").innerHTML = `
    <section class="booking" id="booking">

      <div class="booking__left">
        <div class="section-label section-label--light">Bookings</div>
        <h2 class="booking__heading">
          Let's make<br>something<br><em>beautiful</em>
        </h2>
        <p class="booking__body">
          Whether it's a headline show, festival set, or intimate performance —
          get in touch and let's talk about what's possible.
        </p>
        <a class="booking__submit" href="mailto:therosiecrown@gmail.com">
          Get in Touch
        </a>
      </div>

      <div class="booking__right">
        <div class="booking__bg-word">Book</div>
        <div class="booking__details">
          ${detailsHTML}
        </div>
      </div>

    </section>
  `;
}
