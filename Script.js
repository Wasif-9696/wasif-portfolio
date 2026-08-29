// MOBILE MENU
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const icon = menuIcon.querySelector("i");

    if (navLinks.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


// CLOSE MOBILE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");

        const icon = menuIcon.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});


// ACTIVE NAVIGATION
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// BACK TO TOP BUTTON
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }

});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// CURRENT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();


// SIMPLE FADE-IN EFFECT
const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.1
    }
);

document
    .querySelectorAll(".skill-card, .project-card, .info-card, .contact-card")
    .forEach(card => {

        card.style.opacity = "0";
        card.style.transform = "translateY(25px)";
        card.style.transition = "all .6s ease";

        observer.observe(card);

    });
