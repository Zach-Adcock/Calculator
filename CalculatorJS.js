//JS for The Odin Project calculator


//Basic calculation functions

const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1/num2;

//Operator function
const operate = (operator, num1, num2) => {
    switch (operator) {
        case 'add':
            return addition(num1, num2)
            break;
        case 'subtract':
            return subtraction(num1, num2)
            break;
        case 'multiply':
            return multiplication(num1, num2)
            break;
        case 'divide':
            return division(num1, num2)
            break;
        default: 
            console.log('ERROR');
    }
};


//Add on-click functions for digit buttons and display current digit
displayCurrentDigit = document.querySelector('.displayed-digit');
var currentDigit = '0'
const digitButtons = document.querySelectorAll('.btn-digit');
console.log(digitButtons);
digitButtons.forEach(item => {
    item.addEventListener('click', () => {
        currentDigit =item.id;
        displayCurrentDigit.innerText = currentDigit;
        console.log(currentDigit);
    })
});

