const show = function (elem) {
    elem.classList.add("modal-active")
}
const hide = function (elem) {
    elem.classList.remove("modal-active")
}
const toggle = function (elem) {
    if (elem.classList.contains("modal-active")) {

        hide(elem)
        return
    }
    show(elem)
}
const events = function (elem, modal) {
    elem.addEventListener('click', () => {      
        toggle(modal)    
    })
}
const btnModal = document.getElementsByClassName('btn-modal')
for (let i = 0; i < btnModal.length; i++) {
    let id = btnModal[i].dataset.modal
    let modal = document.getElementById(id)
    let btnClose = modal.getElementsByClassName("close")
    events(btnModal[i], modal)
    events(btnClose[0], modal)
}

document.addEventListener('click', function(event) {
    modal = document.getElementsByClassName('modal-active') 
    if (modal.length !== 0) {
        const modalInside = modal[0].contains(event.target)
        for (let i = 0; i < btnModal.length; i++) {
            const btnInside = btnModal[i].contains(event.target)
            if (!modalInside && !btnInside) {
                toggle(modal[0])
            }
        } 
    }
})


document.addEventListener('keyup',  event => {
    modal = document.getElementsByClassName('modal-active') 
    if (modal.length !== 0 && event.key === "Escape") {
        toggle(modal[0])
    }
})



