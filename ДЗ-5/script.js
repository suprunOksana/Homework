
alert('Hello!');


let length = +prompt('How many elements in the array do you want? (from 5 to 20)');

 while (Number.isNaN(length) || length < 5 || length > 20) {
    length = +prompt('How many elements in the array do you want? (from 5 to 20)');
  }



function createArray(length) {
    let array = [];
    for(let i = 0; i < length; i++) {
        do {
        array[i] = +prompt('Enter the number');
     } while (Number.isNaN(array[i])) ;
            
    }
 return array;
} 



function sortArray(array) {                   
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1; j++) {
           if (array[j+1] < array[j]) {
           let t = array[j+1]; 
           array[j+1] = array[j];
           array[j] = t;
         }
        }
     }   
                     
    return array;   
}

function printArray(array) {
let result = '';
 for (let i = 0; i < array.length; i++) {
   result +=`${array[i]} \n`;
 } 
 alert (result);
}


let newArray = createArray(length);
newArray = sortArray(newArray);
printArray(newArray);

