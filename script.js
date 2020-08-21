const numbers = document.querySelectorAll(".number")

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const calculatorScreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = ''

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll(".operator")

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}

operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        inputOperator(event.target.value)
    })
})

const calculate = () => {
    let result = ''
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case '-':
            result = (prevNumber) - (currentNumber)
            break
        case '*':
            result = (prevNumber) * (currentNumber)
            break
        case '/':
            result = (prevNumber) / (currentNumber)
            brea
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}

const equalSign = document.querySelector(".equal-sign")

equalSign.addEventListener("click", () => {
    calculate()
    updateScreen(currentNumber)
})

const clearBtn = document.querySelector(".all-clear")

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal')

inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})