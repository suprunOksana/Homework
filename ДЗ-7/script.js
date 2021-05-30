

/*

function getMenuRessalt() {
  const menu = `
  1 - sort in ascending / descending order \n 
  2 - display all even / odd \n 
  3 - display the sum of all numbers, average arephmitic number, largest / smallest
  `;
  let userChoice = +prompt(menu);
  return userChoice;
}



function processUserChoice(choice, getArrayUsser) {
  switch (choice) {
    case 1:
      alert(sortAscending(getArrayUsser));
      alert(sortDescending(getArrayUsser));
      break;
    case 2:
      alert(even);
      alert(odd);
      break;
    case 3:
      alert(arraySum);
      alert(arithmeticMean);
      alert(maxArray(getArrayUsser));
      alert(minArray(getArrayUsser));
      break;
    default:
      alert('Try again');
}

}

(function main(arr) {

  let userArray = getArrayUsser('Enter numbers separated by a space');
  let choice = getMenuRessalt();

  processUserChoice(choice, userArray);


  main();
})();

*/




function getArrayUsser(message) {

  let result = prompt(message);
  const arr = result.split(' ').map(Number);
   return arr;
  }
   
  alert(getArrayUsser());


  function sortAscending() {

    getArrayUsser.sort( (a, b) => a - b );
  
  }
alert(sortAscending());


/*
  function sortDescending() {
    let result = getArrayUsser.sort(function (a, b) {
      return b - a
    });
    return result;
  }


  let even = getArrayUsser.filter(function (elem) {
    return elem % 2 === 0;
  });
  let odd = getArrayUsser.filter(function (elem) {
    return !(elem % 2 === 0);
  });


  let arraySum = getArrayUsser.reduce(function (sum, current) {
    return sum + current;
  }, 0);


  let arithmeticMean = arraySum / getArrayUsser.length;


  function maxArray(getArrayUsser) {
    return Math.max.apply(null, getArrayUsser);
  }


  function minArray(getArrayUsser) {
    return Math.min.apply(null, getArrayUsser);
  }


  alert(sortAscending());
  alert(sortDescending());

  alert(even);
  alert(odd);

  alert(arraySum);
  alert(arithmeticMean);
  alert(maxArray(getArrayUsser));
  alert(minArray(getArrayUsser));
  */