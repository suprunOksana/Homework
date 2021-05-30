
do {
const mathOperation = prompt('Chose an operation: +, -, *, /, sin, cos, pow' );

let num1 = +prompt('Insert the first number: ');



if (mathOperation == '+' || mathOperation == '-' || mathOperation == '*' || mathOperation == '/' || mathOperation == 'pow') {
    num2 = +prompt('Insert the second number: ');
}

if (Number.isNaN(num1) || Number.isNaN(num2)) {
    alert('Try again');
}


switch (mathOperation) {
    case '+':
    result = num1 + num2;
    break;
    case '-':
    result = num1 - num2;
    break;
    case '*':
    result = num1 * num2;
    break;
    case '/':
    result = num1 / num2;
    break;
    case 'pow':
    result = Math.pow(num1, num2);
    break;
    case 'sin':
    result = Math.sin(num1);
    break;
    case 'cos':
    result = Math.cos(num1);
    break;
    }
    const operationResult = `Result: ${result}`;
    alert (operationResult);

} while (confirm ('Do you want to try again?'));







