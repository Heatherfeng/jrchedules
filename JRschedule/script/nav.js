// Dark/Light mode toggle
const themeSwitch = document.getElementById("theme-switch");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
