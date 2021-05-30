
let num = 5;

// функция для вычисления факториала числа через цикл
function factorial(num) {
  let result = 1;
 
  if (num === 0 || num === 1 ) {
    return 1;
  }

  for (let i = num; i > 1; i--) {
    result = result * i; 
  }
    return result;
  }

 alert(factorial(num));


// функция для вычисления факториала числа через рекурсию

function factorial2(num) {
if (num === 0 || num === 1 ) {
  return 1;
}
    else {
      return num * factorial2(num - 1);
    }
}

 alert(factorial2(num));



// функция для работы с массивом

let array = [5, 8, 32, 45, 16];

let arg = 2;

  function correctArray(array, arg) {
    for(let i = 0; i < array.length; i++) {
      if (arg > array[i]) {
        array.shift();
        array.push(arg);
        return array;
      }
      if (arg < array[i]) {
        array.pop();
        array.unshift(arg);
        return array;
    } 
  }
}

   alert(correctArray(array, arg));
   
   