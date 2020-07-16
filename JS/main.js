const submit = document.getElementById('form-submit');
const compareStr = 'google';

// * Task #5
const ArrObjects = [
  { name: 'John', age: 27 },
  { name: 'Nick', age: 32 },
  { name: 'Garry', age: 23 },
];

// * Task #3-4

submit.addEventListener('click', query);

function query() {
  const currentQuery = document.getElementById('form-search').value;
  if (currentQuery && currentQuery.toLowerCase() !== compareStr) {
    alert(currentQuery);
  } else if (currentQuery.toLowerCase() === compareStr) {
    alert('Yandex круче. Но это не точно');
  }
  alert(ArrObjects[0].name);
  superSum('Введите число (десятичные пишите через точку)', isNumeric);
}

// * Task #6
function isNumeric(n) {
  return isNaN(parseFloat(n)) && !isFinite(n);
}

function superSum(message, condition) {
  let sum = 0;
  for (let i = 0; i < 2; i++) {
    value = +prompt(message, '');
    if (!condition(value)) {
      sum += value;
    } else {
      i--;
      continue;
    }
  }
  return alert(`Сумма чисел равна ${parseFloat(sum)}`);
}

// * Task #7
const arrOfNumber = [13, 33, 3, 8, 17, 23, 19];
let maxNumber = -Infinity;
let minNumber = Infinity;
const arrLength = arrOfNumber.length;

for (let i = 0; i < arrLength; i++) {
  if (arrOfNumber[i] > maxNumber) {
    maxNumber = arrOfNumber[i];
  }
}
for (let i = 0; i < arrLength; i++) {
  if (arrOfNumber[i] < minNumber) {
    minNumber = arrOfNumber[i];
  }
}
console.log(maxNumber);
console.log(minNumber);

// * Task #8

let a = 17;
let b = 19;

function swap(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  return [x, y];
}

const arr = swap(a, b);
a = arr[0];
b = arr[1];

console.log(a);
console.log(b);

// * Task #9
function findMax(arr) {
  let max = -Infinity;
  let length = arr.length;
  while (length--) {
    max = arr[length] > max ? (max = arr[length]) : max;
  }
  return max;
}
console.log(findMax(arrOfNumber));
