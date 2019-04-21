//1. Написати функцію function(from, to) {}, яка рахує всі парні і непарні числа на заданому. 
//   Додати перевірку коли функція запускається без аргументів, коли один аргумент, або більше двох виводити повідомлення про помилку.


let evenOddNumberResult = [];

function evenOddNumberSum(from, to){
  evenOddNumberResult[0] = 0;
  evenOddNumberResult[1] = 0;
  if (isNaN(from) || arguments.length !== 2 || isNaN(to)){ //input validation
    return 'error!';
  }
  else if (from <= to){
    for (let i = from; i <= to; i++){
        if (i % 2 === 0){
          evenOddNumberResult[0] += i;
        }
        else {
          evenOddNumberResult[1] += i;
        }
      }
    return evenOddNumberResult;
  }
  else if (from >= to){
    for (let i = to; i <= from; i--){
        if (i % 2 === 0){
          evenOddNumberResult[0] += i
        }
        else {
          evenOddNumberResult[1] += i
        }
      }
    return evenOddNumberResult;
  }
}

console.log('sum of even numbers - ', evenOddNumberSum(2,9)[0], 'sum of odd numbers - ', evenOddNumberSum(2,9)[1]);

//2. Написати функцію, яка отримує в якості аргументів числа, якщо чисел менше 10, повертає суму всіх чисел, 
//    якщо більше 10 повертає масив. Якщо запустити функцію без параметрів, видає помилку.  
//    використати псевдомасив arguments

let tenCheckResultSum = 0;
const list0 = [];
const listLess10 = [2, 5, 6, 9, 2, 5, 6];
const listGreater10 = [2, 5, 6, 9, 2, 5, 6, 9, 2, 5, 6, 9, 2, 5, 6, 9];

function tenCheck(array){
  if (array.length === 0){
    return 'error!';
  }
  else if (arguments.length > 0 && arguments.length < 10){ 
    for (let i = 0; i <= arguments.length; i++){
      tenCheckResultSum += array[i];
    }
    return tenCheckResultSum;
  }
  else if(array.length >= 10) {
    return array;    
  }
}

console.log('for empty array ',tenCheck(list0));
console.log('for array shorter then 10 elements ',tenCheck(listLess10));
console.log('for array longer then 10 elements ', tenCheck(listGreater10));


//3. Написати функцію, факторіал, яка приймає число і повертає факторіал цього числа.

let input = 5;
let FactorialResult = 1;

function factorialOfNumber(n){
  for (let i = 1; i <= n; i++){
    FactorialResult = FactorialResult * i;
  }
  return FactorialResult;
}

console.log('factorial of', input, ' - ',  factorialOfNumber(input));


//4. Написати функцію, яка сортує масив чисел за допомогою методу “бульбашка” і повертає відсортований масив

const nonSortedList = [2, 5, 6, 9, 15, 26, 79, 32, 25, 76, 92, 65, 16, 49];
let swapped = true;

function bubbleSort(array){
  let indexOfLastUnsortedElement = array.length;
  do{  
    swapped = true;
    for(let i = 0; i <= indexOfLastUnsortedElement-1; i++){
      if(array[i] > array[i+1]){
        let temp = array[i];
        array[i] = array[i+1];
        array[i+1] = temp;
        swapped = false;
      }
    }
  } while (swapped === false);
  return array;
}

console.log('sorted array ', bubbleSort(nonSortedList));