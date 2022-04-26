class Calculator {
    constructor(previousOpTxtElement, currentOpTxtElement) {
        this.previousOpTxtElement = previousOpTxtElement;
        this.currentOpTxtElement = currentOpTxtElement;
        this.clear();
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        this.currentOperand = number;
    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {
        this.currentOpTxtElement.textContent = this.currentOperand;
    }

}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOpTxtElement = document.querySelector('[data-previous-operand]');
const currentOpTxtElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOpTxtElement, currentOpTxtElement);

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});




