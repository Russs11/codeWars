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

let calc = new Calc()
calc.sum();
function readNumber() {
  let num;

  do {
    num = prompt("Введите число", 0);
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}

alert(`Число: ${readNumber()}`);
console.log(readNumber());
