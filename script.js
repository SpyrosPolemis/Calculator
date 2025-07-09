function add (number1, number2) {
    let result = +number1 + +number2;
    number1 = result
    display.innerHTML = result
}

function subtract (number1, number2) {
    let result = number1 - number2;
    number1 = result
    display.innerHTML = result
}

function multiply (number1, number2) {
    let result = number1 * number2;
    number1 = result
    display.innerHTML = result
}

function divide (number1, number2) {
    let result = number1 / number2;
    number1 = result
    display.innerHTML = result
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
        number1 = display.innerHTML
        clearDisplay();
        sign = event.target.innerHTML
    })
})

function clearDisplay() {
    display.innerHTML = "";
}

const equals = document.querySelector("#equals")
equals.addEventListener("click", () => {
    calculate(sign, number1)
})

function calculate (operator, number1) {
    number2 = display.innerHTML
    console.log(operator)
    if (operator === "+") {
        add(number1, number2)
    } else if (operator === "-") {
        subtract(number1, number2)
    } else if (operator === "x") {
        multiply(number1, number2)
    } else if (operator === "/") {
        divide(number1, number2)
    } else {
        console.log("ERROR")
    }
}

let number1;
let number2;
let sign;