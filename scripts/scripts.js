/* Navbar behavior */
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

const firstSection = sections[0];
let activeLinkIndex = 0;

function handleScroll() {
  const currentPos = window.scrollY;
  const top = firstSection.offsetTop;

  if (currentPos === top) {
    var navbar = document.getElementById("nav_glass");
    navbar.style.backgroundColor = "";
    navbar.style.backdropFilter = "";
    navbar.classList.remove('scrolling-active');
  } else {
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
        activeLinkIndex = index;

        var navbar = document.getElementById("nav_glass");
        navbar.style.backgroundColor = "rgba(34, 34, 34, 0.5)";
        navbar.style.backdropFilter = "blur(5px)";
        navbar.classList.add('scrolling-active');
      }
    });
  }

  navLinks.forEach((navLink, index) => {
    if (index === activeLinkIndex) {
      navLink.classList.add("active");
      navLink.style.color = "#cd1dbf";
    } else {
      navLink.classList.remove("active");
      navLink.style.color = "";
    }

    navLink.addEventListener("mouseover", () => {
      navLink.style.color = "#cd1dbf";
    });

    navLink.addEventListener("mouseout", () => {
      if (index !== activeLinkIndex) {
        navLink.style.color = "";
      }
    });
  });
}

window.addEventListener("scroll", handleScroll);