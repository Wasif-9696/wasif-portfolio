// Mobile menu toggle
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.onclick = () => {
    nav.classList.toggle("open");
};

// Close menu after clicking a navigation link
document.querySelectorAll("nav a").forEach(link => {
    link.onclick = () => {
        nav.classList.remove("open");
    };
});
