/* =========================================================
   ARINOLA THEATRE — HEADER
   File: js/header.js

   Purpose:
   Injects the shared site header across every page and
   controls the mobile/collapsible navigation menu.
========================================================= */
const headerMount = document.querySelector("#site-header");

if (headerMount) {
    headerMount.innerHTML = `
    <header class="site-header">
      <div class="site-header__inner container">
        <a class="site-header__brand" href="index.html" aria-label="Arinola Theatre home">
          <img
            class="site-header__logo"
            src="images/logo/arinola-theatre-logo.png"
            alt="Arinola Theatre"
          />
        </a>

        <button
          class="nav-toggle"
          type="button"
          aria-label="Open navigation menu"
          aria-expanded="false"
          aria-controls="site-navigation"
          data-nav-toggle
        >
          <span class="nav-toggle__layer nav-toggle__layer--pink" aria-hidden="true"></span>
          <span class="nav-toggle__layer nav-toggle__layer--blue" aria-hidden="true"></span>

          <span class="nav-toggle__lines" aria-hidden="true">
            <span class="nav-toggle__line"></span>
            <span class="nav-toggle__line"></span>
            <span class="nav-toggle__line"></span>
          </span>
        </button>

        <nav class="site-header__nav" id="site-navigation" aria-label="Main navigation" data-site-nav>
          <a class="site-header__link" href="about.html">About</a>
          <a class="site-header__link" href="productions.html">Productions</a>
          <a class="site-header__link" href="events.html">Events</a>
          <a class="site-header__link" href="collaborators.html">Collaborators</a>
          <a class="site-header__link" href="gallery.html">Gallery</a>
          <a class="site-header__link" href="store.html">Store</a>
          <a class="site-header__link" href="contact.html">Contact</a>
          <a class="site-header__link site-header__link--featured" href="my-city-too.html">MY CITY TOO</a>

          <button
            class="theme-toggle"
            type="button"
            aria-label="Toggle light and dark theme"
            data-theme-toggle
          >
            <span class="theme-toggle__icon" aria-hidden="true">☾</span>
            <span class="theme-toggle__text"></span>
          </button>
        </nav>
      </div>
    </header>
  `;
}

const navToggle = document.querySelector("[data-nav-toggle]");
const siteNav = document.querySelector("[data-site-nav]");

if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
        const navIsOpen = siteNav.classList.toggle("site-header__nav--open");

        navToggle.classList.toggle("nav-toggle--open", navIsOpen);
        navToggle.setAttribute("aria-expanded", String(navIsOpen));
        navToggle.setAttribute(
            "aria-label",
            navIsOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    siteNav.addEventListener("click", (event) => {
        const clickedLink = event.target.closest("a");

        if (!clickedLink) return;

        siteNav.classList.remove("site-header__nav--open");
        navToggle.classList.remove("nav-toggle--open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open navigation menu");
    });
}