const monthlyPrice = document.querySelectorAll('#subscription-plan__price--monthly');
const annualPrice = document.querySelectorAll('#subscription-plan__price--annually');
const btn = document.getElementById('switch_toggle_button');
let monthly = false;

// function annualPrices () {
//     monthlyPrice[i].classList.add('subscription-plan--hidden');
//     annualPrice[i].classList.remove('subscription-plan--hidden');
// }

function showAnnual () {
    for (let i = 0; i < monthlyPrice.length; i++) {
            monthlyPrice[i].classList.add('subscription-plan--hidden');
            annualPrice[i].classList.remove('subscription-plan--hidden');
            monthly = false;
    }
}

function showMonthly () {
    for (let i = 0; i < monthlyPrice.length; i++) {
            monthlyPrice[i].classList.remove('subscription-plan--hidden');
            annualPrice[i].classList.add('subscription-plan--hidden');
            monthly = true;
    }
}

function toggle () {
    if (monthly === true) {
        showAnnual()
    } else {
        showMonthly();
    }
}

btn.addEventListener('click', toggle);