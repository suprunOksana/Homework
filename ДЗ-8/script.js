


function calc(number) {
  return {
    add: result => number += result,
    sub: result => number -= result,
    div: result => number /= result,
    mult: result => number *= result,
    getResult: () => number,
    printResult: () => {
      alert(number);
    }
  };


}

const first = calc(4);


first.add(33);
first.sub(12);
first.div(2);
first.mult(4);


first.printResult();