
let subscribeButton = document.querySelector('.subscribe-btn'),
    errorValid = document.querySelector('#error'),
    form = document.querySelector('.form'),
    emailInput = document.querySelector('.email-input'),
    thankYouPage = document.querySelector('.thankyou-page'),
    emailThankYou = document.querySelector('.email-thankyou');

form.addEventListener('submit', (subscribeButton) => {
    subscribeButton.preventDefault();
    // ERROR:
    if(emailInput.value.trim() === '') {
        errorValid.innerHTML = 'Valid email required';
        errorValid.innerHTML.style.color = "red";
        emailInput.style.background = '#FFE8E6';
        emailInput.style.border = '1px solid #FF5476';
    }
    // THANK-YOU-PAGE:
    else {
        open(thankYouPage);
    }
    localStorage.setItem('emailInput', emailInput.value);
    console.log(localStorage.getItem('emailInput'));
})

