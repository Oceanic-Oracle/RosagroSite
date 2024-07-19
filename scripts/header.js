const headerEl = document.getElementById("header")
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY

    if (scrollPos > 10) {
        headerEl.classList.add("header__scroll")
        nav.style.top = "66px"
        updateNavPosition();
    } else {
        headerEl.classList.remove("header__scroll")
        nav.style.top = "96px"
        updateNavPosition();
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
        const textWidth = link.getBoundingClientRect().width;
        const underlineElement = link.querySelector('.nav__link-underline');
        underlineElement.style.width = `${textWidth}px`;

        link.addEventListener('mouseenter', () => {
            underlineElement.style.opacity = '1';
        });

        link.addEventListener('mouseleave', () => {
            underlineElement.style.opacity = '0';
        });
    });
});