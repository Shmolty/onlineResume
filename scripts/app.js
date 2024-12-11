// --- FORM VALIDATION ---
const form = document.querySelector('.contactForm');
const phoneHelp = document.querySelector('#phoneHelp');

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.email1.value;
    const emailPattern = /^[a-zA-Z@.]{6,30}$/

    let formValid = true;

    if(!emailPattern.test(email)){
        formValid = false;
        emailHelp.textContent = 'Please enter a valid email address';
    }

    const phoneNumber = form.phoneNum1.value;
    const phoneNumberPattern = /^[0-9]{0,11}$/;

    if(!phoneNumberPattern.test(phoneNumber)){
        formValid = false;
        phoneHelp.textContent = 'Please enter a valid phone number. Just numbers, no dashes';
    }

    if(formValid === true){
        // submit form
        form.email1.value = null;
        form.phoneNum1.value = null;
    }

});