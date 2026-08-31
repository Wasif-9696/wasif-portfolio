// MOBILE MENU

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu && nav) {

    menu.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

}


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll("#nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
