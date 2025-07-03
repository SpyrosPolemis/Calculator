function add (number1, number2) {
    return number1 + number2;
}

function subtract (number1, number2) {
    return number1 - number2;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function divide (number1, number2) {
    return number1 / number2;
}

const display = document.querySelector("#display")

const numbers = document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", () => {
        if (display.innerHTML.length < 10) {
            display.innerHTML += (number.innerHTML)
        }
    })
})

// function operate (operator, number1, number2) {
//     if (operator === "+") {
//         add(number1, number2)
//     } else if (operator === "+") {
//         subtract(number1, number2)
//     } else if (operator === "+") {
//         multiply(number1, number2)
//     } else if (operator === "+") {
//         divide(number1, number2)
//     } else {
//         console.log("ERROR")
//     }
// press a button, add number to number1 
// }

// let number1;
// let number2;
// let operator;