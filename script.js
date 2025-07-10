function add (number1, number2) {
    let result = +number1 + +number2;
    display.innerHTML = result
    return result;
}

function subtract (number1, number2) {
    let result = number1 - number2;
    display.innerHTML = result
    return result
}

function multiply (number1, number2) {
    let result = number1 * number2;
    display.innerHTML = result
    return result
}

function divide (number1, number2) {
    let result = number1 / number2;
    display.innerHTML = result
    return result
}

const display = document.querySelector("#display")
const clearButton = document.querySelector("#clear");

clearButton.addEventListener("click", clearDisplay)

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (display.innerHTML.length < 6) {
            display.innerHTML += (number.innerHTML)
        }
    })
})

const operators = document.querySelectorAll(".operator")
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(sign, number1, number2)
        if (sign && number1) {
            number2 = display.innerHTML
            calculate(sign, number1, number2)
            number1 = display.innerHTML
            sign = event.target.innerHTML
        } else {
            number1 = display.innerHTML
            sign = event.target.innerHTML
            clearDisplay();
        }
    })
})

function clearDisplay() {
    display.innerHTML = "";
}

const equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    calculate(sign, number1)
})

function calculate (operator, number1, number2) {
    number2 = display.innerHTML;
    console.log("calculating, this is number1:" + number1 + "number2:" + number2)
    if (operator === "+") {
        number1 = add(number1, number2)
    } else if (operator === "-") {
        number1 = subtract(number1, number2)
    } else if (operator === "x") {
        number1 = multiply(number1, number2)
    } else if (operator === "/") {
        number1 = divide(number1, number2)
    } else {
        console.log("ERROR")
    }
}

let number1;
let number2;
let sign;