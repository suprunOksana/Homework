
do {
const mathOperation = prompt('Chose an operation: +, -, *, /, sin, cos, pow' );
let num1;
let num2, result;

do { 
  num1 = +prompt('Insert the first number: ');
} while (Number.isNaN(num1)); 


if (mathOperation === '+' || mathOperation === '-' || mathOperation === '*' || mathOperation === '/' || mathOperation === 'pow') {
do {
  num2 = +prompt('Insert the second number: ');
} while (Number.isNaN(num2)); 

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






