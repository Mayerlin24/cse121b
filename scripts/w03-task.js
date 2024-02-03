/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers (add1, add2) {
    let addNumber1 = parseFloat(document.querySelector('#add1').value);
    let addNumber2 = parseFloat(document.querySelector('#add2').value);
    document.querySelector("#sum").value = add(addNumber1, addNumber2).toFixed(2);
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = parseFloat(document.querySelector('#subtract1').value);
    let subtract2 = parseFloat(document.querySelector('#subtract2').value);
    document.querySelector("#difference").value = subtract(subtract1, subtract2).toFixed(2);
}
document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (num1, num2) => num1 * num2;

const multiplyNumbers = (factor1, factor2) => {
    let number1 = parseFloat(document.querySelector('#factor1').value);
    let number2 = parseFloat(document.querySelector('#factor2').value);
    document.querySelector("#product").value = multiply(number1, number2).toFixed(2);
}
document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (num1, num2) => num1 / num2;

const divideNumbers = (dividend, divisor) => {
    let number1 = parseFloat(document.querySelector('#dividend').value);
    let number2 = parseFloat(document.querySelector('#divisor').value);
    document.querySelector("#quotient").value = divide(number1, number2).toFixed(2);
}
document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);

/* Decision Structure */
function getTotal () {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    if (document.getElementById('member').checked) {
        subtotal = subtotal - subtotal * 0.2;
}
    document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`
}
document.getElementById("getTotal").addEventListener("click", getTotal);
/* ARRAY METHODS - Functional Programming */


/* Output Source Array */
let numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,]
document.getElementById("array").textContent = numArray.join(',');

/* Output Odds Only Array */

document.getElementById('odds').innerHTML = numArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */

document.getElementById('evens').innerHTML = numArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.getElementById('sumOfArray').innerHTML = numArray.reduce((sum,number) => sum + number);

/* Output Multiplied by 2 Array */
const multipliedArray = numArray.map(number => number * 2);
document.getElementById('multiplied').innerHTML = multipliedArray.join(',');


/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number);
document.getElementById('sumOfMultiplied').innerHTML = sumOfMultiplied;
