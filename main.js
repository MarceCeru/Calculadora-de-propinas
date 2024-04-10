let bill = document.querySelector('.inputs-section__bill-inputs');
let billNumber = parseInt(bill.value);

let people = document.querySelector('.inputs-section__people-inputs');
let peopleNumber = parseInt(people.value);

let tipResult = document.querySelector('.results__tip-value');
let totalResult = document.querySelector('.results__total-value')

let buttons = document.querySelectorAll('.btns__button');

let alert = document.querySelector('#alert');

let tipValue = 5;

buttons.forEach(element => {
    element.addEventListener('click', event => {
        //cambiar estilos
        removeActive();
        element.classList.add('btns__button--selected')
        tipValue = parseInt(event.target.innerText.slice(0, -1));

        calculateTip();

    })
})

function removeActive() {
    buttons.forEach(element => {
        element.classList.remove('btns__button--selected');
    });
}

// Actualizando el bill
bill.addEventListener('input', () => {
    billNumber = parseFloat(bill.value);
    calculateTip();
});

//Actualizando Custom
let custom = document.querySelector('.btns__custom');
custom.addEventListener('click', () => {
    removeActive();
})
custom.addEventListener('input', () => {
    tipValue = parseInt(custom.value);
    if (!isNaN(tipValue)) {
        calculateTip();
    }
});

//Actualizando personas

people.addEventListener('input', () => {
    peopleNumber = parseFloat(people.value);

    if (peopleNumber == 0 || isNaN(peopleNumber)) {
        people.style.borderColor = 'rgb(164, 68, 60)';
        alert.classList.add('error');
    } else {
        alert.classList.remove('error');
        people.style.borderColor = 'hsl(189, 41%, 97%)';
        calculateTip();
    }

});

// Reset
let resetBtn = document.querySelector('.result-section__reset');
resetBtn.addEventListener('click', () => {
    bill.value = 0;
    billNumber = 0;
    people.value = 5;
    peopleNumber = 5;
    custom.value = custom;
    calculateTip();
})


function calculateTip() {
    // calulo de tip amount
    tipResult.innerText = ((billNumber * tipValue / 100) / peopleNumber).toFixed(2);

    // calculo del total
    totalResult.innerText = (((billNumber * tipValue / 100) + billNumber) / peopleNumber).toFixed(2);
}