function bg() {
    let header = document.querySelector("header")
    let current = window.scrollY

    if (current > 0) {
        header.classList.add("header-fix")
    } else {
        header.classList.remove("header-fix")

    }
}

window.addEventListener("scroll", bg)