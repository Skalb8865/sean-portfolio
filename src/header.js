const jsonFile = "/header.json";
const headerSelector = document.querySelector("header");

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((header) => {
      const { Home, Projects, Education, Experience } = header;
      headerSelector.innerHTML += `
      <nav id="navbar" class="navbar">
        <a href="/index.html#top" class="nav_logo"><i class="ri-home-4-line"></i> ${Home}</a>
        <ul class="nav_list">
          <li><a href="#projects_section" aria-label="Projects Section"><i class="ri-briefcase-4-line"></i> ${Projects}</a></li>
          <li><a href="#education_section" aria-label="Education Section"><i class="ri-school-line"></i> ${Education}</a></li>
          <li><a href="#expireince_section" aria-label="Experience Section"><i class="ri-building-4-line"></i> ${Experience}</a></li>
        </ul>
      </nav>
        `;
    });
  });

// const hamburgerIcon = document.getElementById("hamburger_icon");
// function myFunction() {
//   hamburgerIcon.classList.toggle("ri-xrp-line");
// }
// document.addEventListener("DOMContentLoaded", () => {
//   const hamburgerIcon = document.getElementById("hamburger_icon");
//   hamburgerIcon.addEventListener("click", myFunction);
// });

/* <a class="github_btn" href="https://github.com/Skalb8865" aria-label="My Github" target="_blank">Github</a>
<div id="hamburger_icon" class="ri-menu-line" role="button"></div> */