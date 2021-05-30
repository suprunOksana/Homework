
let numb1 = Number(prompt(`Введите первое число`));
let numb2 = Number(prompt(`Введите второе число`));
let sum = numb1 + numb2;
let diff = numb1 - numb2;
let mult = numb1 * numb2;
let div = numb1 / numb2;
let results = `Результат:
 Сумма чисел ${numb1} + ${numb2}  =  ${sum},
 Разница чисел ${numb1} - ${numb2}  =  ${diff},
 Умножение чисел ${numb1} * ${numb2}  =  ${mult},
 Деление чисел ${numb1} / ${numb2}  =  ${div}`;

alert(results);
console.log(results);