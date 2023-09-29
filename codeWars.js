'useStrict';
// DESCRIPTION:
// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
// export function powersOfTwo(n:number):number[]{
//     let arr:number[] = [];
//   for(let i=0; i<=n; i++)
//     arr[i] = 2**i;
//   return arr;
//   }
// let info: {
//     officeId: number;
//     isOpened: boolean;
//     contacts:{
//         phone:string;
// 		email: string;
//         address: {
//             city: string;
//         }
//     }
// } = {
// 	"officeId": 45,
// 	"isOpened": false,
// 	"contacts": {
// 		"phone": "+79100000000",
// 		"email": "my@email.ru",
// 		"address": {
// 			"city": "Москва"
// 		}
// 	}
// }
// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.
// Examples:
// 1: -1
// 14: -14
// -34: 34
// console.log(info);
// export class Kata {
//   static opposite(n: number) {
//   return n? -n: n;
//   }
// }
// DESCRIPTION:
// In this Kata we are passing a number (n) into a function.
// Your code will determine if the number passed is even (or not).
// The function needs to return either a true or false.
// Numbers may be positive or negative, integers or floats.
// Floats with decimal part non equal to zero are considered UNeven for this kata.
// export const testEven = (n: number): boolean => {
//   // your awesome code goes here
//   return n % 2 === 0;
// };
// DESCRIPTION:
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
// Your function will be tested with pre-made examples as well as random ones.
// If you can, try writing it in one line of code.
// export function findDifference(
//   a: [number, number, number],
//   b: [number, number, number]
// ): number {
//   // your code here
//   let first = 1;
//   let second = 1;
//   for (const i of a) {
//     first *= i;
//   }
//   for (const j of b) {
//     second *= j;
//   }
//   if (first > second) {
//     return first - second;
//   } else return second - first;
// }
// export function findDifference(
//   a: [number, number, number],
//   b: [number, number, number]
// ): number {
//   return Math.abs(a.reduce((x, y) => x * y) - b.reduce((x, y) => x * y));
// }
// DESCRIPTION:
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
// Constraint:
// 1 <= month <= 12
//  function quarterOf(month: number): number {
//   if (month <= 3) return 1;
//   if (month <= 6) return 2;
//   if (month <= 9) return 3;
//   return 4;
// }
// var quarterOf2 = function (month) { return Math.ceil(month / 3); };
// function hello(name) {
//   if (name === '' || !name) {
//     return 'Hello, World!'
//   }
//   let res = name.toLowerCase()
//   let greetName = res[0].toUpperCase() + res.slice(1)
//   return `Hello, ${greetName}!`
// }

// console.log(hello('johN'));

// Создайте калькулятор
// важность: 5
// Создайте объект calculator(калькулятор) с тремя методами:

// read()(читать) запрашивает два значения и сохраняет их как свойства объекта.
//   sum()(суммировать) возвращает сумму сохранённых значений.
//     mul()(умножить) перемножает сохранённые значения и возвращает результат.
// let calculator = {
//   // ... ваш код ...
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// let calculator = {
//   a: 0,
//   b: 0,

//   read() {
//     this.a = prompt('a', 0),
//     this.b = prompt('b', 0)
//   },
//   sum() {
//     return +this.a + +this.b
//   },
//   mul() {
//     return +this.a * +this.b
//   }
// }

// calculator.read()
// alert(calculator.sum())
// alert(calculator.mul())

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('Сколько нужно добавить?', 0);
//   };

// }

// let accum = new Accumulator(0)
// accum.read();
// accum.read()
// alert(accum.value)


// class Calc {
//   constructor(a, b) {
//     this.a = a;
//     this.b = b
//   }
//   sum() {
//     this.a = +prompt('enter first value', 0);
//     this.b = +prompt('enter second value', 0);
//     alert(this.a + this.b)
//   }
// }
// alert(calc.res)

// let calc = new Calc()
// calc.sum();
// function readNumber() {
//   let num;

//   do {
//     num = prompt("Введите число", 0);
//   } while (!isFinite(num));

//   if (num === null || num === '') return null;

//   return +num;
// }

// alert(`Число: ${readNumber()}`);
// console.log(readNumber());


//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

//ucFirst("вася") == "Вася";

// function ucFirst(str) {
//   if (!str) return str;

//   return str[0].toUpperCase() + str.slice(1);
// }

// alert(ucFirst("вася")); // Вася

//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

//Функция должна быть нечувствительна к регистру:
// function checkSpam(str) {
//   let str2 = str.toLowerCase()
//   if (str2.includes('viagra') || str2.includes('xxx')) {
//     return true
//   } else {
//     return false
//   }
// }
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

//   Например:

// function truncate(str, maxlength) {
//   return (str.length > maxlength) ?
//     str.slice(0, maxlength - 1) + '…' : str;
// }

// Напишите функцию sumInput(), которая:

// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//   P.S.Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("Введите число", 0);

//     // Прекращаем ввод?
//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert(sumInput());
// Check to see if a string has the same amount of 'x's and 'o's.The method must return a boolean and be case insensitive.The string can contain any char.

// Examples input / output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false
// function xo(str) {

//   let match = str.toLowerCase();
//   let x = 0;
//   let o = 0;

//   for (let i = 0; i < match.length; i++) {
//     if (match[i] === "o") {
//       x++;
//     } else if (match[i] === "x") {
//       o++;
//     }
//   }
//   return x === o;
// }

// console.log(xo("XO"));
// Сумма свойств объекта
// важность: 5
// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.

// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
// function rot13(message){
//     return message.replace(/[a-z]/giu, (x) => {
//       return String.fromCharCode(
//         x.charCodeAt() + (
//           x.toLowerCase() <= 'm' ? 13: -13
//         ));
//     });
//   }
// DESCRIPTION:
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// function twoSort(s) {
//   const sorted = s.sort(); // the default sort function works
//     return sorted[0] // take first element
//       .split("") // split string into chars
//       .join("***"); // join chars with ***
//   }

  // DESCRIPTION:
  // Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
  
  // If you need help, here's a reference:
//   function take(arr, n) {
//   return arr.slice(0, n)
// }
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
// 	// your code
//   const res = []
//   const lowerStr = s.toLowerCase()
  
//   for(let i = 0; i < lowerStr.length; i++){
//     let str = lowerStr[i].toUpperCase()
//     for(let j = 0; j < i; j++){
//       str += lowerStr[i]
//     }
//     res.push(str)
//   }
//   return res.join('-')
// 

// function accum(s){
//   return [...s.toLowerCase()].reduce((acc, curr, i)=> acc + '-' + curr.toUpperCase() + curr.repeat(i))
// }

// accum("ZpglnRxqenU")/
// console.log( accum("abcd"));
// У нас есть объект:

// let user = {
//   name: "John",
//   years: 30
// };
// Напишите деструктурирующее присваивание, которое:

// свойство name присвоит в переменную name.
// свойство years присвоит в переменную age.
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
// Пример переменных после вашего присваивания:

// let user = { name: "John", years: 30 };

// // ваш код должен быть с левой стороны:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

let user = {
  name: "John",
  years: 30
};

let {name, years: age, isAdmin = false} = user;

alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false