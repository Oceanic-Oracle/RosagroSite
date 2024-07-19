const headerEl = document.getElementById("header")

window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY

    if (scrollPos > 10) {
        headerEl.classList.add("header__scroll")
    } else {
        headerEl.classList.remove("header__scroll")
    }
})