/* =========================================================
   ARINOLA THEATRE — THEME TOGGLE
   File: js/theme-toggle.js

   Purpose:
   Handles dark/light theme switching and saves user choice.
========================================================= */

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeIcon = document.querySelector(".theme-toggle__icon");
const root = document.documentElement;

const storedTheme = localStorage.getItem("arinola-theme");

const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
).matches;

const initialTheme = storedTheme || (prefersLight ? "light" : "dark");

root.setAttribute("data-theme", initialTheme);
updateThemeIcon(initialTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        const currentTheme = root.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";

        root.setAttribute("data-theme", nextTheme);
        localStorage.setItem("arinola-theme", nextTheme);

        updateThemeIcon(nextTheme);
    });
}

function updateThemeIcon(theme) {
    if (!themeIcon) return;

    if (theme === "dark") {
        themeIcon.textContent = "☾";
    } else {
        themeIcon.textContent = "☀";
    }
}