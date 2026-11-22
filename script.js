document.addEventListener("DOMContentLoaded", function () {

  // Mobile navigation menu
  const menuButtons = document.querySelectorAll(".menu-toggle");

  menuButtons.forEach(function (menuButton) {
    const navLinks = menuButton.parentElement.querySelector(".nav-links");

    if (!navLinks) return;

    function openMenu() {
      navLinks.classList.add("open");
      menuButton.setAttribute("aria-expanded", "true");
      menuButton.setAttribute("aria-label", "Close navigation");
      menuButton.textContent = "✕ Close";
    }

    function closeMenu() {
      navLinks.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      menuButton.textContent = "☰ Menu";
    }

    menuButton.addEventListener("click", function () {
      const isOpen = navLinks.classList.contains("open");

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    // Close menu with Escape key
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && navLinks.classList.contains("open")) {
        closeMenu();
        menuButton.focus();
      }
    });

    // Close menu when clicking outside it
    document.addEventListener("click", function (event) {
      if (
        navLinks.classList.contains("open") &&
        !menuButton.contains(event.target) &&
        !navLinks.contains(event.target)
      ) {
        closeMenu();
      }
    });

  });

});
