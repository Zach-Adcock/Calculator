//JS for The Odin Project calculator


//Basic calculation functions

const addition = (num1, num2) => num1 + num2;
const subtraction = (num1, num2) => num1 - num2;
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1/num2;

//Operator function - uses the current operation, and the numbers input
//before/after the operator
var num1,num2,operation ;

const operate = () => {
    let int1 = parseInt(num1);
    let int2 = parseInt(num2);
    if (typeof num1 !== 'undefined' && typeof num2 !== 'undefined' && typeof operation !== 'undefined'){
        currentDisplay.innerText = `${num1} ${operation} ${num2} =  `; //display top row - what is being calc'd

        switch (operation) {
            case '+':
                currentDigit = addition(int1, int2).toString();
                break;
            case '-':
                currentDigit = subtraction(int1, int2).toString();
                break;
            case '*':
                currentDigit = multiplication(int1, int2).toString();
                break;
            case '/':
                currentDigit = division(int1, int2).toString();
                break;
            default: 
                console.log('ERROR');
        }
        displayCurrentDigit.innerText = currentDigit;
    
    }
};


//Add on-click functions for digit buttons and display current digit
displayCurrentDigit = document.querySelector('.displayed-digit');
var currentDigit = ''
const digitButtons = document.querySelectorAll('.btn-digit');
digitButtons.forEach(item => {
    item.addEventListener('click', () => {
        currentDigit += item.id;
        num2 = currentDigit;
        displayCurrentDigit.innerText = currentDigit;
    })
});

//Run Operate function when '=' is clicked 
const equalButton = document.querySelector('#equal-sign');
equalButton.addEventListener('click', operate);

//Store current digit when an operand is clicked




//Add on-click eventlisteners for operand buttons. will set the operation
const operationButtons = document.querySelectorAll('.btn-operator');
operationButtons.forEach(item => {
    item.addEventListener('click', () => {
        num1 = currentDigit         //holds the first number to be calc'd
        operation = item.innerText; //sets current operator
        currentDigit = '';          //resets input line to ''
        currentDisplay.innerText = num1 + ' ' + operation;

    })
});


//Top row of display - shows what is being calculated
currentDisplay = document.querySelector('.current-display');

//Set clear button
const clearButton = document.querySelector('#AC');
clearButton.addEventListener('click', () => {
    currentDisplay.innerText = '';
    displayCurrentDigit.innerText = '';
    num1 ='';
    num2 ='';
    operation ='';
    currentDigit = '0';
});

//set =/- button
const oppositeNumber = document.querySelector('#opposite');
oppositeNumber.addEventListener('click', () => {
    if (currentDigit[0] == '-'){
        num2 = currentDigit = currentDigit.substring(1);
        currentDisplay.innerText = num2;
        displayCurrentDigit.innerText = num2;
    } else {
        num2 = currentDigit = '-' + currentDigit;
        currentDisplay.innerText = num2;
        displayCurrentDigit.innerText = num2;
    }
})