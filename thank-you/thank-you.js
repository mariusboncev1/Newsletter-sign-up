let emailThankYou = document.querySelector('.email-thankyou');

emailThankYou.innerHTML = localStorage.getItem('emailInput');

// dismiss btn
let dismissBtn = document.querySelector('#dismiss-btn');

dismissBtn.addEventListener('submit', () => {
    history.go(-1);
    history.back();
})