/* =========================================================
   ARINOLA THEATRE — CONTACT / CTA
   File: js/contact.js

   Purpose:
   Injects a reusable contact CTA section into #site-cta.
   It skips the dedicated contact page and any page that
   already contains a full contact section.
========================================================= */

const ctaMount = document.querySelector("#site-cta");
const pageName = window.location.pathname.split("/").pop() || "index.html";
const pageAlreadyHasContactSection = document.querySelector(".section--contact");

if (ctaMount && pageName !== "contact.html" && !pageAlreadyHasContactSection) {
  ctaMount.innerHTML = `
    <section class="section section--cta" aria-label="Contact Arinola Theatre">
      <div class="section__inner container cta-panel">
        <div class="cta-panel__content">
          <p class="eyebrow sticker sticker--pink">Work With Us</p>
          <h2 class="section-heading__title">Have a project, event, or collaboration in mind?</h2>
          <p>
            Send a message for bookings, performances, workshops, magazine enquiries,
            collaborations, and general Arinola Theatre conversations.
          </p>
        </div>

        <a class="button button--primary" href="contact.html">Start a Conversation</a>
      </div>
    </section>
  `;
}
