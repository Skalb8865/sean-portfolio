const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 75) {
    navbar.style.backdropFilter = "blur(5px)";
    setTimeout(() => {
    navbar.style.background = "rgba(255, 255, 255, 0.1)"
    }, "100");
    navbar.style.transition = "all 0.75s ease"
  } else {
    navbar.style.backdropFilter = "blur(0px)";
    setTimeout(() => {
      navbar.style.background = "transparent"
      }, "100");
    navbar.style.transition = "all 0.75s ease"
  }
});