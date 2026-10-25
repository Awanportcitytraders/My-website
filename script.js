document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // Mobile navigation menu
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.toggle("open");

      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕ Close" : "☰ Menu";
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰ Menu";
      });
    });
  }
});
