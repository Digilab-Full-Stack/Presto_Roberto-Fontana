
// aggiunta e rimozionedi una classe nav-scrolled all'elemento con l'ID navBar 
//  in base alla posizione di scorrimento della finestra

let nav = document.querySelector("#navBar");


window.addEventListener('scroll', () => {

    if (window.scrollY > 0) {
        nav.classList.add("nav-scrolled")
    } else {
        nav.classList.remove("nav-scrolled")
    }
})

