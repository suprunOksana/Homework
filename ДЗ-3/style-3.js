
let oper = prompt(`Введите математическую операцию`);

if (oper == `+` || oper == `-` || oper == `*` || oper == `/`) {
let num1 = Number(prompt(`Введите первое число`));
let num2 = Number(prompt(`Введите второе число`));

switch (oper) {
        case `+`:
        alert (`Результат: ${num1} + ${num2}  =  ${num1 + num2}`);
        break;
        case `-`:
        alert (`Результат : ${num1} - ${num2}  =  ${num1 - num2}`);
        break;
        case `*`:
        alert (`Результат : ${num1} * ${num2}  =  ${num1 * num2} `);
        break;
        case `/`:
        alert (`Результат : ${num1} / ${num2}  =  ${num1 / num2} `);
        break;
        default:
        alert(`Неверное введение данных`);
        break;
        }
        }

if(oper == `cos` || oper == `sin`) {
        let num = prompt(`Введите число`);

        if(oper == `cos`) {
        alert (`Результат : `+ Math.cos(num));
        }

        if(oper == `sin`) {
        alert (`Результат : `+ Math.sin(num));
        }
}
if(oper == `pow`) {
        let num = prompt(`Введите число`);
        let exp = prompt(`Введите степень возведения`);  
        alert (`Результат : `+ Math.pow(num, exp));
        }
