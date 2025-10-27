addEventListener("click", (event) => {
    document.body.classList.toggle("light_mode");
})

if (document.body.classList.contains('light_mode')) {
    localStorage.setItem('theme', 'light_mode');
} else {
    localStorage.removeItem('theme');
}

