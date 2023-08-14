const button = document.querySelector(".design__one-contact-button");
const form = document.querySelector(".design__one-contact-form");

let isOpen = false;
button.addEventListener('click', () => {

    if (isOpen === false) {
        form.style.width = '100%';   // Expand width to 100%
        form.style.height = '80rem';  // Allow content to determine height  
        form.style.padding = '5rem';
        isOpen = true;

    } else {
        form.style.width = '0';      // Shrink width to 0
        form.style.height = '0';      
        form.style.padding = '0rem';
        isOpen = false;
    }
});