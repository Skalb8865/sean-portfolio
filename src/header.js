// const jsonFile = "/header.json";
// const headerSelector = document.querySelector("header");

// fetch(jsonFile)
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((header) => {
//       const { Home, Projects, Education, Experience } = header;
//       headerSelector.innerHTML += `
//       <nav id="navbar" class="navbar">
//         <a class="navbar_logo" href="/index.html">
//           <img src="/sk_logo.svg" alt="Logo">
//         </a>
//         <a href="#top" class="nav_logo active"><i class="ri-home-4-line"></i> ${Home}</a>
//         <ul class="nav_list">
//           <li><a href="#projects_section" aria-label="Projects Section"><i class="ri-briefcase-4-line"></i> ${Projects}</a></li>
//           <li><a href="#education_section" aria-label="Education Section"><i class="ri-school-line"></i> ${Education}</a></li>
//           <li><a href="#expireince_section" aria-label="Experience Section"><i class="ri-building-4-line"></i> ${Experience}</a></li>
//         </ul>
//         <div id="hamburger_icon" class="ri-menu-line" role="button"></div>
//       </nav>
//         `;
//     });
//   });


//  <a class="github_btn" href="https://github.com/Skalb8865" aria-label="My Github" target="_blank">Github</a>


const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0.5) {
    navbar.style.background = "rgba(0, 0, 0, 0.25)";
  } else {
    navbar.style.background = "#030303";
    navbar.style.backgroundImage = "radial-gradient(#838383 1px, transparent 1px)"
    navbar.style.backgroundSize = "20px 20px"
  }
});