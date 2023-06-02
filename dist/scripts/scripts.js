const navLinks = document.querySelectorAll(".nav-link");
const navSocialLinks = document.querySelectorAll(".nav-social-links");
const sections = document.querySelectorAll("section");

const firstSection = sections[0];
let activeLinkIndex = 0;

function handleScroll() {
  const currentPos = window.scrollY;
  const top = firstSection.offsetTop;

  if (currentPos === top) {
    var navbar = document.getElementById("nav-glass");
    navbar.style.backgroundColor = "";
    navbar.style.backdropFilter = "";
    navSocialLinks.forEach((svg) => {
      svg.style.fill = "";
    });
    navbar.classList.remove('scrolling-active');
  } else {
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (currentPos >= sectionTop && currentPos < sectionTop + sectionHeight) {
        activeLinkIndex = index;

        var navbar = document.getElementById("nav-glass");
        navbar.style.backgroundColor = "rgba(34, 34, 34, 0.8)";
        navbar.style.backdropFilter = "blur(5px)";
        navSocialLinks.forEach((svg) => {
          svg.style.fill = "#ffffff";
        });
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

  navSocialLinks.forEach((svg) => {
    svg.addEventListener("mouseover", () => {
      svg[0].style.fill = "#0072b1";
      svg[1].style.fill = "#ef5033";
      svg[2].style.fill = "#bb001b";
    });
  
    svg.addEventListener("mouseout", () => {
      svg.style.fill = "";
    });
  });
}

window.addEventListener("scroll", handleScroll);