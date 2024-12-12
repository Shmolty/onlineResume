// --- FORM VALIDATION ---

// handles
const form = document.querySelector('.contactForm');
const emailHelp = document.querySelector('#emailHelp');
const phoneHelp = document.querySelector('#phoneHelp');
const emailInput = document.querySelector('#email1');
const phoneInput = document.querySelector('#phoneNum1');

// submit validation
form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.email1.value;
    const emailPattern = /^[a-zA-Z0-9.]*@[a-zA-Z0-9.]*$/

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

// live validation
form.email1.addEventListener('keyup', e => {
    const emailPattern = /^[a-zA-Z0-9.]*@[a-zA-Z.0-9]*$/

    if(emailPattern.test(e.target.value)){
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
    } else {
        emailInput.classList.remove('success');
        emailInput.classList.add('error');
    }

});

form.phoneNum1.addEventListener('keyup', e => {
    const phoneNumberPattern = /^[0-9]{0,11}$/;

    if(phoneNumberPattern.test(e.target.value)){
        phoneInput.classList.remove('error')
        phoneInput.classList.add('success');
    } else {
        phoneInput.classList.remove('success')
        phoneInput.classList.add('error');
    }
});