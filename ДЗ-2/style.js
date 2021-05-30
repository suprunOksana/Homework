
let numb1 = Number(prompt(`Введите первое число`));
let numb2 = Number(prompt(`Введите второе число`));
let sum = numb1 + numb2;
let diff = numb1 - numb2;
let mult = numb1 * numb2;
let div = numb1 / numb2;
let results = `Calculations are finished!
Results:
Sum: ${numb1} + ${numb2}  =  ${sum}
Diff: ${numb1} - ${numb2}  =  ${diff}
Mult: ${numb1} * ${numb2}  =  ${mult}
Div: ${numb1} / ${numb2}  =  ${div}`;
console.log(results);
alert(results);