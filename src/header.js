const jsonFile = "/header.json";
const headerSelector = document.querySelector("header");

fetch(jsonFile)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((header) => {
      const { logo_first, logo_last, About, Projects, Education, Experience } = header;
      headerSelector.innerHTML += `
        <nav class="navbar">
        <h1 class="nav_logo">
          ${logo_first} <span>${logo_last}</span>
        </h1>
        <ul class="nav_list">
          <li><a href="#" aria-label="About Section">${About}</a></li>
          <li><a href="#" aria-label="Projects Section">${Projects}</a></li>
          <li><a href="#" aria-label="Education Section">${Education}</a></li>
          <li><a href="#" aria-label="Experience Section">${Experience}</a></li>
        </ul>
        <a class="contact_btn" href="#" aria-label="Contact Me">Contact Me</a>
        <div class="hamburger" id="hamburger" aria-label="open menu" aria-controls="menu" aria-expanded="false"role="button">
          <div class="nav_bar"></div>
          <div class="nav_bar"></div>
          <div class="nav_bar"></div>
        </div>
      </nav>
        `;
    });
  });