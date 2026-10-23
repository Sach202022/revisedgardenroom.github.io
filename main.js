/* =========================================
   THE GARDEN SPA ROOM
   Mobile navigation
========================================= */

(function () {
  "use strict";

  const menuBtn = document.getElementById("menuBtn");
  const mobileNav = document.getElementById("mobileNav");

  if (!menuBtn || !mobileNav) {
    return;
  }

  function setMenuOpen(isOpen) {
    menuBtn.classList.toggle("is-open", isOpen);
    mobileNav.classList.toggle("show", isOpen);
    document.body.classList.toggle("menu-open", isOpen);

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
      "aria-label",
      isOpen ? "Close menu" : "Open menu"
    );

    mobileNav.setAttribute("aria-hidden", String(!isOpen));
    mobileNav.inert = !isOpen;
  }

  menuBtn.addEventListener("click", function () {
    const isCurrentlyOpen =
      menuBtn.getAttribute("aria-expanded") === "true";

    setMenuOpen(!isCurrentlyOpen);
  });

  // Close the menu when a navigation link is selected.
  mobileNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      setMenuOpen(false);
    });
  });

  // Close the menu with Escape.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setMenuOpen(false);
    }
  });

  // Close the mobile menu when returning to desktop width.
  window.addEventListener("resize", function () {
    if (window.innerWidth > 760) {
      setMenuOpen(false);
    }
  });

  // Close the menu if the user clicks outside it.
  document.addEventListener("click", function (event) {
    const isOpen =
      menuBtn.getAttribute("aria-expanded") === "true";

    if (
      isOpen &&
      !mobileNav.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  // Start with the menu closed.
  setMenuOpen(false);
})();
