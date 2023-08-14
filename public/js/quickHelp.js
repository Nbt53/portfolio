const button = document.querySelector(".design__one-contact-button");
const form = document.querySelector(".design__one-contact-form");

let isOpen = false;
button.addEventListener('click', () => {

    if (isOpen === false) {
        form.style.width = '100%'
        form.style.height = '100%'
        form.style.padding = '5rem'
        isOpen = true

    } else {
        form.style.width == '0rem'
        form.style.height = '0rem'
        form.style.padding = '0rem'
        isOpen = false
    }
})