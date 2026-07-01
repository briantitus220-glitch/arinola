/* =========================================================
   ARINOLA THEATRE — FOOTER
   File: js/footer.js

   Purpose:
   Injects the shared footer across every page.
========================================================= */

const footerMount = document.querySelector("#site-footer");

if (footerMount) {
  footerMount.innerHTML = `
    <footer class="site-footer">
      <div class="site-footer__inner container">
        <p class="site-footer__brand">Arinola Theatre</p>

        <div class="site-footer__links" aria-label="Footer navigation">
          <a href="about.html">About</a>
          <a href="productions.html">Productions</a>
          <a href="events.html">Events</a>
          <a href="gallery.html">Gallery</a>
          <a href="store.html">Store</a>
          <a href="my-city-too.html">MY CITY TOO</a>
          <a href="contact.html">Contact</a>
        </div>

        <p class="site-footer__small">© 2026 Arinola Theatre. All rights reserved.</p>
      </div>
    </footer>
  `;
}
