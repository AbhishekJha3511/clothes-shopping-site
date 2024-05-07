let hamburger = document.getElementById("bar");
let nav = document.getElementById("navbar");
let close = document.getElementById("close");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// Active Navbar
document.addEventListener("DOMContentLoaded", function() {
  const activePage = window.location.pathname;
  const navLinks = document.querySelectorAll("nav li a");

  navLinks.forEach(link => {
      if (activePage === "/" && link.getAttribute("href") === "/index.html") {
          link.classList.add("active");
      } else if (link.getAttribute("href") === activePage) {
          link.classList.add("active");
      }
  });
});


