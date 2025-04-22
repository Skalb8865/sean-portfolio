const jsonFile = "/footer.json";
const footerSelector = document.querySelector("footer");

fetch(jsonFile)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((footer) => {
            const { footer_text } = footer;
            footerSelector.innerHTML += `
         <div class="footer_container">
          <p class="footer_text">${footer_text}</p>
       </div>
        `;
        });
    });
