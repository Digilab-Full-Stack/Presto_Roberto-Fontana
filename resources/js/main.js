// catturare elemento a cui associare l'evento "scroll"
let nav = document.querySelector("#navBar");


window.addEventListener('scroll', () => {

    if (window.scrollY > 0) {
        nav.classList.add("nav-scrolled")
    } else {
        nav.classList.remove("nav-scrolled")
    }
})

