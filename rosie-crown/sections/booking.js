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

        <form class="booking__form" id="bookingForm" novalidate>
          <div class="form-row">
            <div class="form-field">
              <label class="form-label" for="fieldName">Name</label>
              <input class="form-input" id="fieldName" name="name" type="text" placeholder="Your name" required />
            </div>
            <div class="form-field">
              <label class="form-label" for="fieldEmail">Email</label>
              <input class="form-input" id="fieldEmail" name="email" type="email" placeholder="your@email.com" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label class="form-label" for="fieldEvent">Event type</label>
              <input class="form-input" id="fieldEvent" name="event" type="text" placeholder="Festival, venue, private..." />
            </div>
            <div class="form-field">
              <label class="form-label" for="fieldDate">Date</label>
              <input class="form-input" id="fieldDate" name="date" type="text" placeholder="mm / yyyy" />
            </div>
          </div>
          <div class="form-field">
            <label class="form-label" for="fieldMessage">Tell me more</label>
            <textarea class="form-textarea" id="fieldMessage" name="message" placeholder="Capacity, location, vision..."></textarea>
          </div>
          <button type="submit" class="booking__submit">Send Inquiry</button>
          <p class="booking__success" id="bookingSuccess">
            Thank you — I'll be in touch within 48 hours.
          </p>
        </form>

        <!--
          TO CONNECT A REAL FORM BACKEND:
          Options include Formspree, Netlify Forms, or EmailJS.

          Formspree (free tier, simplest):
          1. Sign up at formspree.io
          2. Create a new form and get your endpoint URL
          3. Change the <form> tag above to:
             <form class="booking__form" id="bookingForm"
                   action="https://formspree.io/f/YOUR_FORM_ID"
                   method="POST">
          4. Remove the JS submit handler below — Formspree handles it.

          Netlify Forms (if hosting on Netlify):
          Add  data-netlify="true"  to the <form> tag. That's it.
        -->
      </div>

      <div class="booking__right">
        <div class="booking__bg-word">Book</div>
        <div class="booking__details">
          ${detailsHTML}
        </div>
      </div>

    </section>
  `;

  // Client-side form feedback (replace with real backend as noted above)
  document.getElementById("bookingForm").addEventListener("submit", e => {
    e.preventDefault();
    const name  = document.getElementById("fieldName").value.trim();
    const email = document.getElementById("fieldEmail").value.trim();
    if (!name || !email) {
      alert("Please fill in your name and email.");
      return;
    }
    // Show success message
    document.getElementById("bookingSuccess").classList.add("visible");
    e.target.reset();
  });
}
