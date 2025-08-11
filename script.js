function calculate(operator) {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Please enter valid numbers";
    } else {
        if (operator === '+') result = num1 + num2;
        if (operator === '-') result = num1 - num2;
        if (operator === '*') result = num1 * num2;
        if (operator === '/') {
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        }
    }

    document.getElementById('result').innerText = "Result: " + result;
}
