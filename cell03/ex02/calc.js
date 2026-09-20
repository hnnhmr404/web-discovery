document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('calc-form');
    const leftInput = document.getElementById('left-member');
    const rightInput = document.getElementById('right-member');
    const operatorSelect = document.getElementById('operator');
    const resultDisplay = document.getElementById('result-display');

    // Handle calculation on submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const leftVal = leftInput.value.trim();
        const rightVal = rightInput.value.trim();
        const operator = operatorSelect.value;

        // Validate that inputs contain only positive integers (>= 0)
	const isPositiveInteger = (str) => /^\d+$/.test(str);

        if (!isPositiveInteger(leftVal) || !isPositiveInteger(rightVal)) {
            alert('Error :(');
            resultDisplay.textContent = 'Error :(';
            return;
        }

        const left = parseInt(leftVal, 10);
        const right = parseInt(rightVal, 10);

        // Check for division or modulo by zero
        if ((operator === '/' || operator === '%') && right === 0) {
            alert("It's over 9000!");
            resultDisplay.textContent = "It's over 9000!";
            return;
        }

        let result;
        switch (operator) {
            case '+':
                result = left + right;
                break;
            case '-':
                result = left - right;
                break;
            case '*':
                result = left * right;
                break;
            case '/':
                result = left / right;
                break;
            case '%':
                result = left % right;
                break;
            default:
                return;
        }

        // Output result via alert, console log, and the dedicated side display
        alert(result);
        console.log(result);
        resultDisplay.textContent = result;
    });

    // 2. Alert pop-up every 30 seconds
    setInterval(() => {
        alert('Please, use me...');
    }, 30000);
});
