// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example(Input-- > Output):

// 39 -- > 3(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
// 999 -- > 4(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
// // 4 -- > 0(because 4 is already a one - digit number)
// function persistence(num) {
//     let numArr = []
//     numArr = ('' + num).split('')
//     let iterationNum = 0
//     function counter(arr) {
//     let result = 1
//         arr.forEach(item => {
//             result *= item
//         })
//         result = ('' + result).split('')
//         return result
// }

//     while (numArr.length > 1) {
//         iterationNum++
//         numArr = counter(numArr)
//     }
//     console.log(iterationNum);
// }

// persistence(999);


// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//     Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// function highAndLow(numbers) {
//     const newNumbers = numbers.replace(/\s+/g, m => (m == ' ') ? ',' : '');
//     const number = parseInt(newNumbers)
//     console.log(number)
//     // numbers.split('')
//     // console.log(Math.min(newNumbers))
// }

// highAndLow("1 2 3 4 5")
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// function generateHashtag(str) {

//     str = str.replace(/\b\w/g, (c) => c.toUpperCase());
//     const splitted = str.split(" ");
//     splitted.unshift("#");
//     const res = splitted.join("");
//     if (res === "#") {
//         return false;
//     } else if (res.length >= 140) {
//         return false;
//     } else {
//         return res
//     }
// }

// // console.log(generateHashtag(''));
// function numbersTostring(arr){
//   // const res = arr.split('78 2948')
//    const res = arr.split('\n')
//   const res2 = res.map(item =>{
//     return item.slice(8)
//   })
//   console.log(res2.join(', '))
//   // const res2 = res.split(' ,').join(',')
//  // console.log(res2)
// }

// numbersTostring(
// `78 2948 2867219
// 78 2948 2867343
// 78 2948 2867007
// `)

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string / char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//     Examples(Operator, value1, value2)-- > output
//         ('+', 4, 7)-- > 11
//             ('-', 15, 18)-- > -3
//                 ('*', 5, 5)-- > 25
//                     ('/', 49, 7)-- > 7
// function basicOp(operation, value1, value2) {
//     switch (operation) {
//         case '+':
//             return value1 + value2;
//         case '-':
//             return value1 - value2;
//         case '*':
//             return value1 * value2;
//         case '/':
//             return value1 / value2;
//         default:
//             return 0;
//     }
// }


// console.log(basicOp('*', 10, 5));

// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid(2010) and After Earth(2013).Jaden is also known for some of his philosophy that he delivers via Twitter.When writing on Twitter, he is known for almost always capitalizing every word.For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith.The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//     Example:

// Not Jaden - Cased: "How can mirrors be real if our eyes aren't real"
// Jaden - Cased: "How Can Mirrors Be Real If Our Eyes Aren't Real"

// let str = "How can mirrors be real if our eyes aren't real";
// String.prototype.toJadenCase = function () {
//     let arr = this.split(/\s/);
//     let arr2 = arr.map(function (item, index) {
//         return item.slice(0, 1).toUpperCase() + item.slice(1);
//     });
//     return arr2.join(' ');
// };
// let res = str.toJadenCase()
// console.log(res);

// Given an array of integers your solution should find the smallest integer.

// For example:

// Given[34, 15, 88, 2] your solution will return 2
// Given[34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min.apply(null, this);
//     }
// }

// // findSmallestInt([12,5,10,2])
// const res = new SmallestIntegerFinder([12, 5, 10, 2])
// console.log(res);

//Given the string representations of two integers, return the string representation of the sum of those integers.

// For example:

// sumStrings('1', '2') // => '3'
// A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

// I have removed the use of BigInteger and BigDecimal in java

// Python: your solution need to work with huge numbers(about a milion digits), converting to int will not work.
function sumStrings(a, b) {
    const sum = BigInt(a) + BigInt(b)
    return sum.toString()
}