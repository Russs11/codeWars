'useStrict'
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
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

// export function hello(name = ""): string {
//   if (name === "" || !name) {
//     return "Hello, World!";
//   }
//   let res = name.toLowerCase();
//   let greetName = res[0].toUpperCase() + res.slice(1);
//   return `Hello, ${greetName}!`;
// }
// export function hello(name: string = ""): string {
//   return `Hello, ${
//     !name ? "World" : name[0].toUpperCase() + name.slice(1).toLowerCase()
//   }!`;
// }
// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'
export function greet(name: string, owner: string): string {
  return name === owner ? "Hello boss" : "Hello guest";
}