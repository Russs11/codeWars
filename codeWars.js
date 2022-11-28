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
// function sumStrings(a, b) {
//     const sum = BigInt(a) + BigInt(b)
//     return sum.toString()
// }

// The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag(#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
//     Examples
// " Hello there thanks for trying my Kata"  => "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  => "#HelloWorld"
// ""                                        => false
// function generateHashtag(str) {

//     str = str.replace(/\b\w/g, (c) => c.toUpperCase());
//     const splitted = str.split(" ");
//     const unshifted = splitted.unshift("#");
//     const res = splitted.join("");
//     if (res === "#") {
//         return false;
//     } else if (res.length > 140) {
//         return false;
//     } else {
//         return res
//     }
// }

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed(Just like the name of this Kata).Strings passed in will consist of only letters and spaces.Spaces will be included only when more than one word is present.

//     Examples:

// spinWords("Hey fellow warriors") => returns "Hey wollef sroirraw"
// spinWords("This is a test") => returns "This is a test"
// spinWords("This is another test")=> returns "This is rehtona test"
// function spinWords(words) {
//     return words.split(' ').map(function (word) {
//         return (word.length > 4) ? word.split('').reverse().join('') : word;
//     }).join(' ');
// }
// You will be given an array of numbers.You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//     Examples
// [7, 1]  => [1, 7]
// [5, 8, 6, 3, 4]  => [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  => [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

// function sortArray(array) {
//     const odds = array.filter((x) => x % 2).sort((a, b) => a - b);
//     return array.map((x) => x % 2 ? odds.shift() : x)
// }
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example(Input-- > Output):

// 39 -- > 3(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
// 999 -- > 4(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
// 4 -- > 0(because 4 is already a one - digit number)

// function persistence(num) {
//     let numArr = []
//     numArr = ('' + num).split('')
//     let iterationNum = 0
//     function counter(arr) {
//         let result = 1
//         arr.forEach(item => {
//             result *= item
//         })
//         result = ('' + result).split('')
//         return result
//     }

//     while (numArr.length > 1) {
//         iterationNum++
//         numArr = counter(numArr)
//     }
//     return iterationNum
// }
// Write function bmi that calculates body mass index(bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//     let bmi = weight / (height * height);
//     if (bmi <= 18.5)
//         return "Underweight";
//     if (bmi <= 25)
//         return "Normal";
//     if (bmi <= 30)
//         return "Overweight";
//     if (bmi > 30)
//         return "Obese";
// }
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
// function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9;
// }
// // find third angle of triangle
// function otherAngle(a, b) {
//     return c = 180 - (a + b)
// }

// Can you find the needle in the haystack ?

//     Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message(as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input-- > Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]-- > "found the needle at position 5"
// Note: In COBOL, it should return "found the needle at position 6"
// function findNeedle(haystack) {
//     if (haystack.includes("needle")) {
//         return `found the needle at position ${haystack.indexOf("needle")}`;
//     }
// }

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]))
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

//     Note: for this kata y isn't considered a vowel.
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '')
// }

// disemvowel("This website is for losers LOL!")
// console.log(disemvowel("This website is for losers LOL!"));

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string.You don't have to worry with strings with less than two characters.

// function removeChar(str) {
//     let len = str.length - 2
//     let arr = str.split('')
//     let res = arr.splice(1, len).join('')
//     return res;
// };

// function removeChar(str) {
//     return str.slice(1, -1);
// }
// console.log(removeChar("removefirtstandlastword"));




// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example(Input-- > Output):

// 39 -- > 3(because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
// 999 -- > 4(because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
// 4 -- > 0(because 4 is already a one - digit number)

// function persistence(num) {
//     let numArr = []
//     numArr = ('' + num).split('')
//     let iterationNum = 0
//     function counter(arr) {
//         let result = 1
//         arr.forEach(item => {
//             result *= item
//         })
//         result = ('' + result).split('')
//         return result
//     }

//     while (numArr.length > 1) {
//         iterationNum++
//         numArr = counter(numArr)
//     }
//     return iterationNum
// }

function squareSum(numbers) {
    let square = numbers.map(item => {
        return item * item
    })
    let sum = square.reduce((a, b) => a + b, 0)
    return sum
}

squareSum([1, 2, 2])