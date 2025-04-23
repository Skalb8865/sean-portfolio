const scrollUpButton = document.getElementById("scroll_up--container");
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 75) {
        scrollUpButton.style.opacity = "1";
        scrollUpButton.removeAttribute("inert");
    } else {
        scrollUpButton.style.opacity = "0";
        scrollUpButton.setAttribute("inert", "");
    }
});