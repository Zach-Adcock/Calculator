//JS for The Odin Project calculator


//initialize variables
var num1,num2,operation,decimalIndex ;

//Basic calculation functions

const addition = (num1, num2) =>  num1 + num2;
const subtraction = (num1, num2) => {
    if (isNaN(num1)){
        num1 = 0;
    }
    return num1 - num2;
    
};
const multiplication = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1/num2;

//Operator function - uses the current operation, and the numbers input
//before/after the operator

const operate = () => {
    let int1 = parseFloat(num1);
    let int2 = parseFloat(num2);
    if (typeof operation !== 'undefined'){
        if (num1 == ''){
            num1 = 0;
        };
        if (num2 == ''){
            num2 = currentDigit = 0;
        };
        currentDisplay.innerText = `${num1} ${operation} ${num2} =  `; //display top row - what is being calc'd

        switch (operation) {
            case '+':
                currentDigit = addition(int1, int2);
                break;
            case '-':
                currentDigit = subtraction(int1, int2);
                break;
            case '*':
                currentDigit = multiplication(int1, int2);
                break;
            case '/':
                if (int2 != '0'){
                currentDigit = division(int1, int2);
                } else {
                    alert('Cannot divide by zero!');
                    currentDigit = num1 = num2 = '';
                    currentDisplay.innerText = '';
                }
                break;
            default: 
                console.log('ERROR');
        };
      
        //Determine number of digits to round to
        decimalIndex = currentDigit.toString().indexOf('.')
        
        if ((currentDigit.toString().length - decimalIndex) > 3){
            currentDigit = currentDigit.toFixed(2);
        };
        currentDigit.toString();

        //remove zeros after the decimal
        while (currentDigit[-1] == '0') {
            currentDigit.slice(0,-1);
        }
        if (currentDigit[currentDigit.length -1] == '.'){
            currentDigit = currentDigit.slice(0,-1);
        } 
        
        //Display
        displayCurrentDigit.innerText = currentDigit;
    }
};


//Add on-click functions for digit buttons and display current digit
displayCurrentDigit = document.querySelector('.displayed-digit');
var currentDigit = ''
const digitButtons = document.querySelectorAll('.btn-digit');
digitButtons.forEach(item => {
    item.addEventListener('click', () => {
        if (currentDigit == '0'){
            num1 = item.innerText;
            currentDigit = item.innerText;
            displayCurrentDigit.innerText = currentDigit;
        } else {
            currentDigit += item.innerText;
            num2 = currentDigit;
            displayCurrentDigit.innerText = currentDigit;
        }
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
        operation = item.innerText; //sets current operator
        if (num2 !== '' && num2 !== 'undefined'){
            num1 = currentDigit; //holds the first number to be calc'd
            num2 = '';         
            currentDigit = '';          //resets input line to ''
            currentDisplay.innerText = num1 + ' ' + operation;
        }
        currentDisplay.innerText = num1 + ' ' + operation;
    })
    
});


//Top row of display - shows what is being calculated
currentDisplay = document.querySelector('.current-display');

//Set clear button
const clearButton = document.querySelector('#AC');
clearButton.addEventListener('click', () => {
    currentDisplay.innerText = '';
    num1 ='';
    num2 ='';
    operation ='';
    currentDigit = '';
    displayCurrentDigit.innerText = '0';
});

//set =/- button
// const oppositeNumber = document.querySelector('#opposite');
// oppositeNumber.addEventListener('click', () => {
//     if (currentDigit[0] == '-'){
//         num2 = currentDigit = currentDigit.substring(1);
//         currentDisplay.innerText = num2;
//         displayCurrentDigit.innerText = num2;
//     } else {
//         num2 = currentDigit = '-' + currentDigit;
//         currentDisplay.innerText = num2;
//         displayCurrentDigit.innerText = num2;
//     }
// });


//set delete button - deletes one number at a time
const deleteDigit = document.querySelector('#delete');
deleteDigit.addEventListener('click', () => {
    if (displayCurrentDigit.innerText != '' && displayCurrentDigit.innerText != 'undefined' 
    && displayCurrentDigit.innerText != '0') {
        if (currentDigit[0] == '-' && currentDigit.length == 2) {
        num2 = currentDigit = '';
        displayCurrentDigit.innerText = currentDigit;
        } else {
            num2 = currentDigit = displayCurrentDigit.innerText.slice(0,-1);
            displayCurrentDigit.innerText = currentDigit;
        }
    }
});


const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    if (currentDigit.indexOf('.') !== -1){
        return
    } else if (blankSlate() || (num2 =='' && currentDigit =='')){
        num2 = currentDigit = '.';
        displayCurrentDigit.innerText = currentDigit;
    } else {
        currentDigit += '.';
        num2 = currentDigit;
        displayCurrentDigit.innerText = currentDigit;
    } 
});



//Checks for blank slate
function blankSlate() {
    if ((num1 == '' || num1 === undefined) && (num2 == '' || num2 === undefined) 
    && (currentDigit == '' || currentDigit === undefined) && (operation == '' || operation === undefined)){
        return true
    } else {
        return false
    }
};


//test readouts
function readouts() {
    console.log('num1  ' + num1);
    console.log('num2  ' + num2);
    console.log('currentDigit  ' + currentDigit);
    console.log('operation  ' + operation);
};