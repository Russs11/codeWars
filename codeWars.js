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

// function squareSum(numbers) {
//     let square = numbers.map(item => {
//         return item * item
//     })
//     let sum = square.reduce((a, b) => a + b, 0)
//     return sum
// }

// squareSum([1, 2, 2])

// You are given an odd - length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid!(odd - length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

// function stray(numbers) {
//     numbers = numbers.sort((a, b) => a - b);
//     if (numbers[0] !== numbers[1]) {
//         return numbers[0];
//     }
//     else {
//         return numbers[numbers.length - 1];
//     }
// }
// console.log(stray([1, 1, 1, 2]))
//Count characters in your string
//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty ? Then the result should be empty object literal, {}.
// function count(string) {
//     let obj = {}
//     for (let i = 0; i < string.length; i++) {
//         let l = string.charAt(i)
//         obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
//     }

//     console.log(obj)
// }

// count('banana')
// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

// ("Hello", "o") ==> 1
//         ("Hello", "l") ==> 2
//             ("", "z") ==> 0
// Notes:

// The first argument can be an empty string
// The second string argument will always be of length 1

// function strCount(str, letter) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//         if (letter === str.charAt(i))
//         count++
//     }
//     console.log(count)
// }

// strCount('hello', 'l')

// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  => 'hello world this is great'

// // function smash(words) {
// <<<<<<< HEAD
// //     let res = words.join(' ')
// //     console.log(res);
// // }

// // smash(['hello', 'world', 'this', 'is', 'great']);

// function getAge(inputString){
// // return the girl's correct age as an integer. Happy coding :)
//    let res = inputString.split(' ').join(' ').toString()
//     console.log(res[0]);
// }

// getAge("4 years old")
// =======
//    let res = words.join(' ')
//     console.log(res);
// }

// smash(['hello', 'world', 'this', 'is', 'great'])

// DESCRIPTION:
// You are going to be given a word.Your job is to return the middle character of the word.If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//     #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word(string) of length 0 < str < 1000(In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases).You do not need to test for this.This is only here to tell you that you do not need to worry about your solution timing out.

//     #Output

// The middle character(s) of the word represented as a string.

// function getMiddle(s) {
//     let arr = s.split("");
//     while (arr.length > 2) {
//         arr.pop();
//         arr.shift();
//     }
//     console.log(arr.join(""));
//     return arr.join("");
// }

// getMiddle("middle")
// function booleanToString(b) {
//     return b === true ? 'true' : 'false'
// }

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
// function betterThanAverage(classPoints, yourPoints) {

//   return  classPoints.reduce((a, b) => a + b, 0)/ classPoints.length < yourPoints ? true : false

// }

// betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50)

// function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//    const sum = laLigaGoals + copaDelReyGoals + championsLeagueGoals
//     // return sum
//     console.log(sum);
// }

// goals(10, 5, 2)
// Given a non - empty array of integers, return the result of multiplying the values together in order.Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// function grow(x) {
// return x.reduce((a, b) => a * b);
// }

// grow([4, 1, 1, 1, 4])
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// function sortByLength(array) {
//     const compare = (a, b) =>{
//         return a.length - b.length
//     }
//     // return array.sort()
//     console.log(array.sort(compare));
// };

// sortByLength(["Beg", "Life", "I", "To"])

// Build a function that returns an array of integers from n to 1 where n > 0.

// Example: n = 5 -- > [5, 4, 3, 2, 1]
// const reverseSeq = (n) => {
//     const arr = []
//     for (let i = 1; i <= n; i++){
//         arr.push(i)
//     }
//     console.log(arr.reverse());
// };
// reverseSeq(5)
// Your task is to make a function that can take any non - negative integer as an argument and return it with its digits in descending order.Essentially, rearrange the digits to create the highest possible number.

//     Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321
// function descendingOrder(n) {
//     return parseInt(String(n).split('').sort().reverse().join(''))
// }

// Implement a function that accepts 3 integer values a, b, c.The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).
// function isTriangle(a, b, c) {
//     return a + b > c && a + c > b && c + b > a;
// }
// If you can't sleep, just count sheep!!

// Task:
// Given a non - negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".Input will always be valid, i.e.no negative integers.
// var countSheep = function (num) {
//     let res = []
//     for (let i = 0; i < num; i++){
//        res.push(`${i+1} sheep...`)
//     }
//     // return res.join('')
//     console.log(res.join(''));
// }

// countSheep(3)

// Write a function that takes an array of numbers and returns the sum of the numbers.The numbers can be negative or non - integer.If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

// function sum(numbers) {
//     "use strict";
//   return numbers.reduce((a,b) => a + b, 0)
//    console.log(res);
// };
// sum([1, 5.2, 4, 0, -1])

// DESCRIPTION:
// Complete the function that takes two integers(a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// function between(a, b) {
//     let res = []
//     for (let i = a; i <= b; i++){
//         res.push(i)
//     }
//     console.log(res);
// }

// between(1, 4)

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
// function fakeBin(x) {
// 	let stringArr = x.split('')
// 	let toNum = stringArr.map(Number);
// 	for (let i = 0; i < toNum.length; i++) {
// 		if (toNum[i] < 5) {
// 			toNum[i] = 0
// 		} else {
// 			toNum[i] = 1
// 		}
// 	}

// 	return toNum.join('')
// }
// function fakeBin(x) {
// 	return x.split('').map(n => n < 5 ? 0 : 1).join('');
// }
// Вывести в консоль "я люблю js!", пройдя циклом в обратном порядке.
// const arr = ['!', 'JS', 'люблю', 'Я']
// const res = []
// for (let i = arr.length -1; i >= 0; i--){
// 	res.push(arr[i])
// }
// console.log(res.join(' '));

// const duplicateEncode = word => {
//     let newString = ''
//     word = word.toLowerCase() || word
//     word.split('').filter((x, index) => {
//         if (word.indexOf(x) !== index) {
//             newString += ')'
//         } else if (word.lastIndexOf(x) !== index) {
//             newString += ')'
//         } else {
//             newString += '('
//         }
//     })
//     return newString
// }

// console.log('duplicateEncode(Success):', duplicateEncode('Success'));

// A square of squares
// You like building blocks.You especially like building blocks that are squares.And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
//     - 1  => false
// 0  => true
// 3  => false
// 4  => true
// 25  => true
// 26  => false
// var isSquare = function (n) {
//     if (Number.isInteger(Math.sqrt(n))) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// cone.log(isSquare(4));
// const multiply = (a, b)=>{
// 	return a * b
// }
// const sum = (a, b) =>{
// 	return a+b
// }
// function calculate(a, b, fn) {
// 	const res = fn(a, b)
// 	return res
// }

// console.log(calculate(3, 5, multiply));
// This kata is from check py.checkio.org

// You are given an array with positive numbers and a non - negative number N.You should find the N - th power of the element in the array with the index N.If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

// Let's look at a few examples:

// array = [1, 2, 3, 4] and N = 2, then the result is 3 ^ 2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is - 1.
// function index(array, n) {
// 	return !array[n]? -1 : array[n]**n
// }
// // index([1, 2, 3, 4], 2)
// console.log(index([1, 2, 3, 4], 5));
// // Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid.Write a function to help Bob with this calculation.
// class Kata {
// 	static getVolumeOfCuboid(length, width, height) {
// 		return length * width * height
// 	}
// }

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument(also a string).

// 	Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// function solution(str, ending) {
// 	// TODO: complete
// 	let arr = str.split('')
// 	return arr.splice(arr.length - ending.length).join('').includes(ending);
// 	// return str.includes(res)
// }
// function solution2(str, ending) {
// 	return str.endsWith(ending);
// }

// // solution('abcde', 'cde')
// solution('abcde', 'cde')
// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers(Haskell: a tuple).

// For example:

// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example(just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
// function gimme(triplet) {
// 	let min = Math.min.apply(null, triplet)
// 	let max = Math.max.apply(null, triplet)
// 	for (let i = 0; i < triplet.length; i++){
// 		if (triplet[i] < max && triplet[i] > min) {
// 			return triplet.indexOf(triplet[i])
// 		}
// 	}
// 	}

// console.log(gimme([5.9, 10.4, 14.2]));

// Take an array and remove every second element from the array.Always keep the first element and start removing with the next element.

// 	Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-- > ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
// Take an array and remove every second element from the array.Always keep the first element and start removing with the next element.

// 	Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...]-- > ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!
// function removeEveryOther(arr) {
// 	//your code here
// 	let res = []
// 	arr.forEach((element, index) => {
// 		if (index % 2 !== 1) {
// 		res.push(element)
// 	}
// 	})
// 	return res
// }
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// function removeEveryOther(arr) {
// 	return arr.filter(function (elem, index) {
// 		return index % 2 === 0;
// 	});
// }
// removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])
// class SmallestIntegerFinder {
// 	findSmallestInt(args) {
// 		return args.sort(function (a, b) {
// 			return a - b;
// 		})[0];
// 	}
// }

// const SmallestInteger = new SmallestIntegerFinder()

// // SmallestInteger.findSmallestInt([78, 56, 232, 12, 8])
// console.log( SmallestInteger.findSmallestInt([78, 56, 232, 12, 8]));
// The marketing team is spending way too much time typing in hashtags.
// 	Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag(#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// 	Examples
// " Hello there thanks for trying my Kata"  => "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  => "#HelloWorld"
// ""                                        => false

// function generateHashtag(str) {
// 	if (!str || str.length < 1) return false;

// 	let r = '#' + str.split(' ').map(function (el) {
// 		return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
// 	}).join('');
// 	return r.length > 140 ? false : r;
// }
// // generateHashtag("")
// console.log(generateHashtag("#"));

// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]
// function greet(name) {
// 	return `Hello, ${name} how are you doing today?`
// }

// Create a function that takes 2 integers in form of a string as an input, and outputs the sum(also as a string):

// Example: (Input1, Input2-- > Output)

// "4", "5" -- > "9"
// "34", "5" -- > "39"
// "", "" -- > "0"
// "2", "" -- > "2"
// "-5", "3" -- > "-2"
// Notes:

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32 - bit integer limit(2 ^ 31 - 1)
// function sumStr(a, b) {
// 	return String(Number(a) + Number(b));
// }

// Write simple.camelCase method(camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord
// Don't forget to rate this kata! Thanks :)

// String.prototype.camelCase = function (str) {
// 	return this.split(' ').map(function (el) {
// 		return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
// 	}).join('');
// }

// // "test case".camelCase()
// console.log( "test case".camelCase()

//найти  самое короткое слово в строке
// function minLen(str) {
// 	let arr = str.split(' ')
//     console.log(arr);
//     let arr2
// 	let res = arr.reduce((acc, word) => {
// 		if (acc.length < word.length ) {
// 			// console.log(acc);
//           arr2.push(acc)
// 		}

//     }, 0)

// 	console.log(arr2, res);
// }
// minLen("Hi my Name is Ruslan")
// DESCRIPTION:
// Consider an array / list of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// For example,

//     [true, true, true, false,
//         true, true, true, true,
//         true, false, true, false,
//         true, false, false, true,
//         true, true, true, true,
//         false, false, true, true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined
// function countSheeps(array1) {
//     // TODO May the force be with you
//     let  counter = 0
//     array1.forEach((element) => {
//         if (element === true) {
//         counter ++
//         }
//     })

//     return `There are ${counter} sheeps in total`
// }

// countSheeps([true, true, true, false,
//     true, true, true, true,
//     true, false, true, false,
//     true, false, false, true,
//     true, true, true, true,
//     false, false, true, true])

// const arr = [2, 4, 6, 8]
// const avg = arr.reduce((acc, num , i) => {
//     if (i !== arr.length - 1) {
//     return acc + num
//     } else {
//         return (acc + num) / arr.length
// }
// }, 0)

// console.log(avg);

// DESCRIPTION:
// You will be given an array a and a value x.All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings.X can be either.

// Return true if the array contains the value, false if not.

// function check(a, x) {
//         return (a.includes(x)) ? true : false;
//     };
// // check([66, 101], 66)
// // check([66, 101], 66)
// console.log(check([66, 101], 75))

//
// // Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious.Death is defined as having health <= 0.

// Each fighter will be a Fighter object / instance.See the Fighter class below in your chosen language.

// Both health and damagePerAttack(damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.
// function Fighter(name, health, damagePerAttack) {
//     this.name = name;
//     this.health = health;
//     this.damagePerAttack = damagePerAttack;
//     this.toString = function () { return this.name; }
// }
// function declareWinner(fighter1, fighter2, firstAttacker) {

//     let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
//     let defender = fighter1.name === firstAttacker ? fighter2 : fighter1;
//     let winner = null;

//     while (!winner) {

//         defender.health -= attacker.damagePerAttack;

//         attacker = attacker === fighter1 ? fighter2 : fighter1;
//         defender = defender === fighter1 ? fighter2 : fighter1;

//         if (defender.health <= 0) {
//             winner = attacker.name;
//         }
//     }

//     return winner;
// }

// declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
// DESCRIPTION:
// In this kata you will create a function that takes in a list and returns a list with the reverse order.

// 	Examples(Input -> Output)
// 	* [1, 2, 3, 4] -> [4, 3, 2, 1]
// 	* [9, 2, 0, 7] -> [7, 0, 2, 9]

// function reverseList(list) {
// 	let res = []
// 	for (let i = list.length -1; i >= 0; i--){
// 	res.push(list[i])
// 	}
// 	console.log(res);
// }
// function reverseList(list) {
// 	return list.reverse();
// }
// reverseList([1, 2, 3, 4])

// Debugging sayHello function
// 	The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard.It is your job to fix the code and get the program working again!

// Example output:

// // Hello, Mr.Spock
// function sayHello(name) {
// 	return `Hello, ${name}`
// }

// console.log(sayHello('Mr.Cook'));

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7-- -> litres = 3

// // time = 11.8-- > litres = 5

// function litres(time) {
// 	return Math.floor(time * 0.5);
// }
// There is an array with some numbers.All numbers are equal except for one.Try to find it!

// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.
// function findUniq(arr) {
// 	arr.sort((a, b) => a - b);
// 	if (arr[0] === arr[1]) {
// 		return arr.pop()
// 	}
// 	else {
// 		return arr[0]
// 	}
// }
// Instructions
// Output
// You are given an array(list) strarr of strings and an integer k.Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// 	Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling(length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)-- > "abigailtheta"

// function longestConsec(strarr, k) {
// 	let longest = "";
// 	for (let i = 0; k > 0 && i <= strarr.length - k; i++) {
// 		let tempStr = strarr.slice(i, i + k).join("");
// 		if (tempStr.length > longest.length) {
// 			longest = tempStr;
// 		}
// 	}
// 	return longest;
// }

// // longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
// console.log(longestConsec(["itvayloxrp", "wkppqsztdkmvcuwvereiupccauycnjutlv", "vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2));

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each.If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// function lovefunc(flower1, flower2) {
//     // moment of truth
//     if (flower1 % 2 !== 0 && flower2 % 2 === 0 || flower1 % 2 === 0 && flower2 % 2 !== 0) {
//         return true
//     } else {
//         return false
//     }
// }

// lovefunc(1, 4)
//упражнение с кошельком из курса Ларичева
// const wallet = {
// 	balance: 0,
// 	operations: [],
// 	increase: function (sum, reason) {
// 		this.balance += sum
// 		return true
// 	},
// 	decrease: function (sum, reason) {
// 		if (this.balance < sum) {
// 			console.log('Недостаточно баланса');
// 			this.operations.push({
// 				reason: reason,
// 				sum: sum
// 			})
// 			return false
// 		}
// 		this.balance -= sum
// 		this.operations.push({
// 			reason: reason,
// 			sum: -sum
// 		})
// 		return true
// 	},
// 	operationsLength: function () {
// 		return this.operations.length
// 	}
// }

// // wallet.increase(10, 'пополнение')
// console.log( wallet.increase(3000, 'пополнение'));
// console.log( wallet.decrease(5000, 'покупка'));
// console.log(wallet.operationsLength());
// console.log( wallet.decrease(2000, 'покупка'));
// console.log( wallet.balance);
// // console.log( wallet.decrease(20, 'пополнение'));
// console.log(wallet.operations);
// DESCRIPTION:
// Write a function that returns a string in which firstname is swapped with last name.

// 	Example(Input-- > Output)

// "john McClane" -- > "McClane john"
// function nameSuffle(str) {
// 	return str.split(' ').reverse().join(' ')
// }
// DESCRIPTION:
// Terminal game move function
// 	In this game, the hero moves from left to right.The player rolls the dice and moves the number of spaces indicated by the dice two times.

// Create a function for the terminal game that takes the current position of the hero and the roll(1 - 6) and return the new position.

// 	Example:
// move(3, 6) should equal 15
// function move(position, roll) {
// 	return position + roll * 2
// }

// move(3, 6)
// console.log('move(3, 6): ', move(3, 6));
//

// function Ship(draft, crew) {
// 	this.draft = draft;
// 	this.crew = crew;
// }

// Ship.prototype.isWorthIt = function () {
// 	return 20 < this.draft - this.crew * 1.5;
// };
// const titanic = new Ship(15, 10)

// console.log(titanic.isWorthIt());

// Write a class Block that creates a block(Duh..)

// Requirements
// The constructor should take an array as an argument, this will contain 3 integers of the form[width, length, height] from which the Block should be created.

// Define these methods:

// `getWidth()` return the width of the`Block`

// `getLength()` return the length of the`Block`

// `getHeight()` return the height of the`Block`

// `getVolume()` return the volume of the`Block`

// `getSurfaceArea()` return the surface area of the`Block`
// Examples
// let b = new Block([2, 4, 6]) -> creates a `Block` object with a width of `2` a length of `4` and a height of`6`
// b.getWidth() // -> 2

// b.getLength() // -> 4

// b.getHeight() // -> 6

// b.getVolume() // -> 48

// // b.getSurfaceArea() // -> 88
// class Block {

// 	constructor(data) {
// 		// ...
// 		this.width = data[0]
// 		this.length = data[1]
// 		this.height = data[2]

// 	}
// 	getWidth() {
// 		return this.width
// 	}
// 	getLength() {
// 		return this.length
// 	}
// 	getHeight() {
// 		return this.height
// 	}
// 	getVolume() {
// 		return this.width * this.height * this.length
// 	}
// 	getSurfaceArea() {
// 		return 2 * ((this.width * this.length) + (this.length * this.height) + (this.width * this.height))
// 	}
// 	// ...

// }

// class Block {
// 	constructor(data) {
// 		[this.w, this.l, this.h] = data;
// 	}
// 	getWidth() { return this.w }
// 	getLength() { return this.l }
// 	getHeight() { return this.h }
// 	getVolume() {
// 		let { l, w, h } = this;
// 		return w * l * h;
// 	}
// 	getSurfaceArea() {
// 		let { l, w, h } = this;
// 		return 2 * (l * w + l * h + w * h);
// 	}
// }

// let b = new Block([2, 4, 6])

// console.log(b.getSurfaceArea());

// class Class {

// 	static getNumber() {
// 	this.counter = 0
// 		if (this.counter === 1) {
// 			return 1;
// 		} else {
// 			return this.counter * 2
// 		}
// 	}
// }

// // Class.getNumber()
// console.log('Class.getNumber(): ', Class.getNumber());
// You are developing an image hosting website.

// You have to create a function for generating random and unique image filenames.

// Create a function for generating a random 6 character string which will be used to access the photo URL.

// To make sure the name is not already in use, you are given access to an PhotoManager object.

// You can call it like so to make sure the name is unique

// // at this point, the website has only one photo, hosted on the 'ABCDEF' url
// photoManager.nameExists('ABCDEF'); // returns true
// photoManager.nameExists('BBCDEF'); // returns false
// Note: We consider two names with same letters but different cases to be unique.
// function generateName() {
// 	const letters = 'ABCDEFGGIJKLMNOPQRSTUVWXYZ'
// 	let res = ''
// 	// make sure to check the name is unique via the photoManager object
// 	for (let i = 0; i < 6; i++){
// 		 res += letters[Math.floor(Math.random() * letters.length)]
// 	}

// 	return res
// }

// // generateName()
// console.log('generateName(): ', generateName());

// Fun with ES6 Classes #2 - Animals and Inheritance
// Overview
// Preloaded for you in this Kata is a class Animal:

// class Animal {
// 	constructor(name, age, legs, species, status) {
// 		this.name = name;
// 		this.age = age;
// 		this.legs = legs;
// 		this.species = species;
// 		this.status = status;
// 	}
// 	introduce() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// 	}
// }
// Task
// Define the following classes that inherit from Animal.

// 	I.Shark
// The constructor function for Shark should accept 3 arguments in total in the following order: name, age, status.All sharks should have a leg count of 0(since they obviously do not have any legs) and should have a species of "shark".

// 	II.Cat
// The constructor function for Cat should accept the same 3 arguments as with Shark: name, age, status.Cats should always have a leg count of 4 and a species of "cat".

// 	Furthermore, the introduce / Introduce method for Cat should be identical to the original except there should be exactly 2 spaces and the words "Meow meow!" after the phrase.For example:

// var example = new Cat("Example", 10, "Happy");
// example.introduce() === "Hello, my name is Example and I am 10 years old.  Meow meow!"; // Notice the TWO spaces - very important
// III.Dog
// The Dog constructor should accept 4 arguments in the specified order: name, age, status, master.master is the name of the dog's master which will be a string. Furthermore, dogs should have 4 legs and a species of "dog".

// Dogs have an identical introduce / Introduce method as any other animal, but they have their own method called greetMaster / GreetMaster which accepts no arguments and returns "Hello (insert_master_name_here)"(of course not the literal string but replace the(insert_master_name_here) with the name of the dog's master).

// class Animal {
// 	constructor(name, age, legs, species, status) {
// 		this.name = name;
// 		this.age = age;
// 		this.legs = legs;
// 		this.species = species;
// 		this.status = status;
// 	}
// 	introduce() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// 	}
// }

// class Shark extends Animal {
// 	constructor(name, age, status) {
// 		super(name, age, status)
// 		this.legs = 0;
// 		this.species = 'shark'
// 		this.status = status
// 	}
// 	introduce() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;

// 	}
// }

// class Cat extends Animal {
// 	// Do the same here as you did for Shark - define your constructor function and any other methods you need
// 	constructor(name, age, status) {
// 		super(name, age, status)
// 		this.legs = 4;
// 		this.species = 'cat'
// 		this.status = status
// 	}
// 	introduce() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age, status, master) {
// 		super(name, age, status)
// 		this.legs = 4;
// 		this.species = 'dog'
// 		this.status = status
// 		this.master = master
// 	}
// 	introduce() {
// 		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// 	}
// 	greetMaster() {
// 		return `Hello, ${this.master}`
// 	}
// }

// class Shark extends Animal {
// 	constructor(name, age, status) {
// 		super(name, age, 0, "shark", status);
// 	}
// }

// class Cat extends Animal {
// 	constructor(name, age, status) {
// 		super(name, age, 4, "cat", status);
// 	}
// 	introduce() {
// 		return `${super.introduce()}  Meow meow!`;
// 	}
// }

// class Dog extends Animal {
// 	constructor(name, age, status, master) {
// 		super(name, age, 4, "dog", status);
// 		this.master = master;
// 	}
// 	greetMaster() {
// 		return `Hello ${this.master}`;
// 	}
// }

// // let billy = new Shark("Billy", 3, "Alive and well")

// // console.log(billy.introduce());

// // let cathy = new Cat("Cathy", 7, "Playing with a ball of yarn")
// // console.log(cathy.introduce());

// let doug = new Dog("Doug", 12, "Serving his master", "Eliza")
// console.log(doug.greetMaster());
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

// The geese are any strings in the following array, which is pre - populated in your solution:

// ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:

// ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:

// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed.Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
// function gooseFilter(birds) {
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//    return birds.filter(bird => !geese.includes(bird))

//     // return an array containing all of the strings in the input array except those that match strings in geese
// };

// // gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"])
// console.log( gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));
// Take 2 strings s1 and s2 including only letters from a to z.Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//     Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// function longest(s1, s2) {
//     return [...new Set((s1 + s2).split(''))].sort().join('')
// }

// DESCRIPTION:
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums) {
//     return nums !== null ? nums.sort(function (a, b) { return a - b }) : [];
// }
// DESCRIPTION:
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string.Notice the colon and space in between.

//     Examples: (Input-- > Output)

//     []-- > []
//     ["a", "b", "c"]-- > ["1: a", "2: b", "3: c"]
// const number = function (array) {
//     let res = []
//     for (let i = 0; i < array.length; i++) {
//         res.push((i + 1 + ': ') + array[i])
//     }
//     return res;
// }
// let number2 = function (array) {
//     return array.map(function (line, index) {
//         return (index + 1) + ": " + line;
//     });
// }

// function removeSmallest(numbers) {
// return numbers.filter((_,index) => index != numbers.indexOf(Math.min(... numbers)))

// }

// // removeSmallest([1, 2, 3, 4, 5])
// console.log(removeSmallest([1, 2, 3, 4, 5]));

// DESCRIPTION:
// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F
// function abbrevName(name) {
//    return name.split(' ').map((el, el2) => el[0] ).join('.').toUpperCase()
// }

// // abbrevName("Sam Harris")
// console.log(abbrevName("sam harris"));
// DESCRIPTION:
// Complete the solution so that the function will break up camel casing, using a space between words.

//     Example
// "camelCasing"  => "camel Casing"
// "identifier"   => "identifier"
// ""             => ""
// function solution(string) {
//     let arr = []
//     let res = string.split('')
//     console.log(res);
//     for (let i = 0; i < res.length; i++){
//         if (res[i] == res[i].toUpperCase()) {
//             arr.push(' ' + res[i])
//         } else {
//             arr.push(res[i])
//         }
//     }
//     return arr.join('');
// }
// function solution(string) {
//     string = string.split('').map(function (el) {
//         if (el === el.toUpperCase()) {
//             el = ' ' + el
//         }
//         return el
//     })
//     return string.join('')
// }
// function solution(string) {
//     return (string.replace(/([A-Z])/g, ' $1'));

// }

// solution(" ")
// DESCRIPTION:
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.
// function areYouPlayingBanjo(name) {
//     // Implement me
//     return name[0] === 'R' || name[0] === 'r' ? name + ' plays banjo' : name + ' does not play banjo'
// }
// DESCRIPTION:
// Your task is to make two functions(max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//     Examples(Input -> Output)
//     * [4, 6, 2, 1, 9, 63, -134, 566] -> max = 566, min = -134
//         * [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
//             * [42, 54, 65, 87, 0] -> min = 0, max = 87
//                 * [5] -> min = 5, max = 5
// Notes
// You may consider that there will not be any empty arrays / vectors.
// const min = function (list) {
//     return Math.min.apply(null, list);
// }
// const max = function (list) {
//     return Math.max.apply(null, list);
// }

// const min = (list) => Math.min(...list);
// const max = (list) => Math.max(...list);
// const min = function (list) {
//     list.sort((a, b) => (a - b));
//     return list[0];
// }

// const max = function (list) {
//     list.sort((a, b) => (b - a));
//     return list[0];
// }
// DESCRIPTION:
// Instructions
// Write a function that takes a single string(word) as argument.The function must return an ordered list containing the indexes of all capital letters in the string.
// const capitals = function (word) {
//     // Write your code here
//     let arr = word.split('')
//     console.log(arr);
//     let res = []
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] == arr[i].toUpperCase()) {
//             res.push(i)
//         }
//     }
//    return res;
// };

// capitals('CodEWaRs')
// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non - negative number, you have to return the digits of this number within an array in reverse order.

//     Example(Input => Output):
// 35231 => [1, 3, 2, 5, 3]
// 0 => [0]
// function digitize(n) {
//     //code here
//     let str = n.toString()
//     let arr = []
//     for (let i = str.length - 1; i >= 0; i--){
//         arr.push(+str[i])
//     }
//     return arr;
// }
// function digitize(n) {
//     return String(n).split('').map(Number).reverse()
// }
// digitize(35231)
// console.log(digitize(35231));
// DESCRIPTION:
// Task
// Sum all the numbers of a given array(cq.list), except the highest and the lowest element(by value, not by index!).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

//     Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value(null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// function sumArray(array) {
//     if (array == null) {
//         return 0;
//     }
//     else if (array.length < 2) {
//         return 0;
//     }
//     else {
//         array = array.sort(function (a, b) { return a - b; });
//         let total = 0;
//         for (let i = 1; i < array.length - 1; i++) {
//             total += array[i];
//         }
//         return total;
//     }

// }
// function sumArray(array) {
//     return Array.isArray(array) && array.length > 1
//         ? array.reduce((s, n) => s + n, 0) - Math.min(...array) - Math.max(...array)
//         : 0
// }

// const company = {
//     name: 'ООО Агро',
//         employee: [{
//             name: 'Света',
//             getName: function () {
//                 return this.name
//             }
//     }
//     ],
//     ceo: {
//         name: 'Вася',
//         getName: function () {
//             return this.name
//         }

//     },
//     getName: function () {
//         return this.name
//     }
// }

// // company.getNames()
// console.log( company.employee.map(employee => employee.getName()));

// const userInfo = {
// 	balance: 0,
// 	operations: 0,
// 	increase(sum) {
// 		this.balance += sum;
// 		this.operations ++
// 	}
// }

// function user() {
// 	const userObj = { ...userInfo }
// 	return function () {
// 		return userObj
// 	}
// }

// const user1 = user()
// user1().increase(100)
// user1().increase(100)
// console.log(user1());

// const user2 = user()
// user2().increase(100)

// console.log(user2());

// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x) {
//     return x.reduce((acc, el) => {
//         return Number(acc) + Number(el)
//     }, 0)
// }
// Given a set of numbers, return the additive inverse of each.Each positive becomes negatives, and the negatives become positives.

// 	invert([1, 2, 3, 4, 5]) == [-1, -2, -3, -4, -5]
// invert([1, -2, 3, -4, 5]) == [-1, 2, -3, 4, -5]
// invert([]) == []
// You can assume that all values are integers.Do not mutate the input array / list.

// function invert(array) {
// 	return array.map((item) => item < 0 ? Math.abs(item) : -Math.abs(item))
// }

// const invert = array => array.map(num => -num);
// DESCRIPTION:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD') == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1, 2, 2, 3, 3]) == [1, 2, 3]
// var uniqueInOrder = function (iterable) {
//     let res = []

//     for (let i = 0; i < iterable.length; i++) {
//         if (iterable[i] !== iterable[i-1]){
//             res.push(iterable[i])
//         }
//     }
//     console.log(res)
// }

// uniqueInOrder('AAAABBBCCDAABBB');
// DESCRIPTION:
// You get an array of numbers, return the sum of all of the positives ones.

//     Example[1, -4, 7, 12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.
// function positiveSum(arr) {
//     return arr.reduce((a, b) => {
//         if (b > 0) {
//             return a + b
//         }
//         return a
//     }, 0)
// }

// // positiveSum([-1, 4, -7, 5, 3])
// console.log( positiveSum([-1, 4, -7, 5, 3]));
// You will be given an array and a limit value.You must check that all values in the array are below or equal to the limit value.If they are, return true.Else, return false.

// You can assume all values in the array are numbers.
// function smallEnough(a, limit) {
//     returna.map(item => {
//         if (item <= limit) {
//             return true
//         } else {
//             return false
//         }
//     })

//     if (res.includes(false)) {
//         return false
//     }
//     else {
//         return true
//     }
// }
// console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120));

// DESCRIPTION:
// Write a function that checks if a given string(case insensitive) is a palindrome.A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar, the date and time 12 / 21 / 33 12: 21, and the sentence: "A man, a plan, a canal – Panama".
// function isPalindrome(x) {
// return x.split('').reverse().join('').toLowerCase() === x.toLowerCase() ? true: false
// }
// DESCRIPTION:
// You need to write a function that reverses the words in a given string.A word can also fit an empty string.If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

//     Example(Input-- > Output)

// "Hello World" -- > "World Hello"
// "Hi There." -- > "There. Hi"
// function reverse(string) {
//     //your code here
//     return string.split(' ').reverse().join(' ')
// }
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata
// function shortcut(string) {
// 	return string.split(/[aeiou]/g).join('')
// }

// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again.Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// 	Task
// Write a function that returns both the minimum and maximum number of the given list / array.

// 	Examples(Input-- > Output)
// [1, 2, 3, 4, 5]-- > [1, 5]
// [2334454, 5]-- > [5, 2334454]
// [1]-- > [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
// function minMax(arr) {
// 	let res = []
// 		res.push(Math.min.apply(Math, arr));
// 		res.push(Math.max.apply(Math, arr));
// 	return res
// }
// function minMax(arr) {
// 	return [Math.min(...arr), Math.max(...arr)];
// }
// // minMax([1, 2, 3, 4, 5])
// console.log( minMax([1, 2, 3, 4, 5]));

// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata(but not y).

// The input string will only consist of lower case letters and / or spaces.
// function getCount(str) {
// 	let count = 0
// 	let vowels = ['a', 'e', 'i', 'o', 'u']
// 	for (const letter in str) {
// 		for (const vowel in vowels) {

// 			if (str[letter] === vowels[vowel]) {
// 				count++
// 			}
// 			}
// 	}
// 	console.log(count);
// }

// getCount('Letters are big')

// function squareArray(arr) {
// 	let res = arr.map(item => {
// 		return item**2
// 	})
// 	.sort((a,b) => a-b)
// console.log(res);
// }

// squareArray([-4, 1, 0, 3, 10]);
// DESCRIPTION:
// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

// For example:

// checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
// checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
// checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
// checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
// function checkExam(array1, array2) {
//   let correct = 0;
//   let error = 0;
//   let other = 0;

//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] == array2[i]) {
//       correct++;
//       console.log(correct);
//     } else if (array2[i] == "") {
//       other = 0;
//     } else {
//       error++;
//     }
//   }
//   let result = correct * 4 + error * -1 + other;
//   if (result < 0) {
//     return 0;
//   }
//   return result;
// }

// // checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]);
// console.log(
//   'checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]): ',
//   checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])
// );

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// 	Example 1:

// Input: nums = [1, 2, 3, 1]
// Output: true
// Example 2:

// Input: nums = [1, 2, 3, 4]
// Output: false
// Example 3:

// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true

// const containsDuplicate = function (nums) {
// 	return nums.length === new Set(nums).size ? false : true
// };

// Given an array nums containing n distinct numbers in the range[0, n], return the only number in the range that is missing from the array.



// 	Example 1:

// Input: nums = [3, 0, 1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range[0, 3]. 2 is the missing number in the range since it does not appear in nums.

// const missingNumber = function(nums) {
//     let n = nums.length
//     let sum = nums.reduce((acc, el) =>{
//         return acc += el
//     },0)
//     return n * (n+1)/2 - sum
// };
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
// function accum(s) {
//     let res = []
//     for(let i = 0; i< s.length; i++){
//         res.push(s[i].toUpperCase() + Array(i + 1).join(s[i].toLowerCase()));
//     }
// 	return res.join('-')
// }
// // accum("ZpglnRxqenU")
// console.log('accum("ZpglnRxqenU"): ', accum("ZpglnRxqenU"));
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health.Health can't be less than 0.
// function combat(health, damage) {
//     return health < damage ? 0 : health - damage
// }
// Your task is to sort a given string.Each word in the string will contain a single number.This number is the position the word should have in the result.

// 	Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).

// If the input string is empty, return an empty string.The words in the input String will only contain valid consecutive numbers.

// 	Examples
// "is2 Thi1s T4est 3a"  -- > "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -- > "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -- > ""
// function order(words) {
// 	let arr = words.split(' ')
// 	let r = []

// 	arr.forEach(word => {
// 		let x = word.split('')
// 		let num = x.find(el => parseInt(el))
// 		r.push([word, parseInt(num)])
// 	})

// 	r.sort((a, b) => a[1] - b[1]).map(x => x.splice(1, 1))
// 	return r.join(' ')
// }

// // order("is2 Thi1s T4est 3a")
// console.log('order("is2 Thi1s T4est 3a"): ', order("is2 Thi1s T4est 3a"));


// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

// About factors
// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

// You can find a factor by dividing numbers.If the remainder is 0 then the number is a factor.
// You can use the mod operator(%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non - negative number, factor is a positive number.



// function checkForFactor(base, factor) {
// 	return base % factor === 0 ? true : false
// }

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// 	if x > y: 3 points(win)
// if x < y: 0 points(loss)
// if x = y: 1 point(tie)
// We need to write a function that takes this collection and returns the number of points our team(x) got in the championship by the rules given above.

// 	Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// function points(games) {
// 	let counter = 0
// 	for (const nums of games) {
// 		if (+nums[0] > +nums[2]) {
// 			counter += 3
// 		} else if (+nums[0] === +nums[2]) {
// 			counter += 1
// 		}else if (+nums[0] < +nums[2]) {
// 			counter += 0
// 		}

// 	}
// 	return counter
// 	// return 0
// }

// points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])

// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

// function doubleChar(str) {

//   return str.split('').map(item => {
//     return item + item
//   })
//   .join('')
//   console.log(res);
// }

// console.log(doubleChar("Adidas"));
// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
// 	return fuelLeft * mpg >= distanceToPump ? true : false
// };
// DESCRIPTION:
// You are given two arrays a1 and a2 of strings.Each string is composed with letters from a to z.Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and / or a2 are empty return -1 in each language except in Haskell(F#) where you will return Nothing(None).

// 	Example:
// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2)-- > 13
// Bash note:
// input: 2 strings with substrings separated by,
// 	output: number as a string

// function mxdiflg(a1, a2) {
// 	if (a1.length === 0 || a2.length === 0) return -1
// 	let l1 = a1.map(str => str.length)
// 	let l2 = a2.map(str => str.length)
// 	return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
// }

// DESCRIPTION:
// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

// function countBy(x, n) {
//   let z = [];
//   for(let i = 1; i < n + 1; i++){
//   z.push(i * x)
//   }
//   return z
// }

// // countBy(2,5);
// console.log(countBy(2,5));
// DESCRIPTION:
// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
// For example:

// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.


// function solve(s) {
//     let arr = s.split('')
//     let upperCase = 0
//     let lowerCase = 0
//     let res = []
//     for (const item of arr) {
//         if (item == item.toUpperCase()) {
//             upperCase++
//         }
//         else {
//             lowerCase++
//         }
//         res.push(item)

//     }
//     if (upperCase > lowerCase) {
//         return res.join('').toUpperCase()
//     }
//     if (upperCase === lowerCase) {
//         return res.join('').toLowerCase()
//     }
//     else {
//         return res.join('').toLowerCase()
//     }
// }
// function solve(s) {
//     let lowerC = 0;
//     let upperC = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == s[i].toUpperCase()) {
//             upperC++;
//         }
//         else {
//             lowerC++;
//         }
//     }
//     return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
// }

// console.log(solve("Code"));

// // DESCRIPTION:
// // You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// // Your task is to debug the code before your plants die!


// function rainAmount(mm){
//     if (mm < 40) {
//          return `You need to give your plant ${40 - mm}mm of water`
//     }
//    else if(mm > 40){
//          return "Your plant has had more than enough water for today!"
//     }else{
//      return "Your plant has had more than enough water for today!"
//     };
// }

// function rainAmount(mm){
//     if (mm < 40)
//       return "You need to give your plant " + (40 - mm) + "mm of water"
//     return "Your plant has had more than enough water for today!"
//   }
// DESCRIPTION:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


// function updateLight(current) {
//     return current === "green" ? "yellow" : current === "yellow" ? "red" : "green"
// }


// console.log(updateLight("green"));


// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// function paperwork(n, m) {
//     return n > 0 && m > 0 ? n * m : 0
//   }
// DESCRIPTION:
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array ?

// 	Example(Input-- > Output)

// "apple ban" -- > ["apple 5", "ban 3"]
// "you will win" -- > ["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array / list with the length of each word added to each element.

// 	Note: String will have at least one element; words will always be separated by a space.

// function addLength(str) {
// 	return str.split(' ').map(item => {
// 		return `${item} ${item.length}`
// 	})
// 	.join(' ')
// }
// addLength('apple ban')
// console.log(addLength('apple ban'));


// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12
// Notes
// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
// function makeNegative(num) {
// 	return num < 0 ? num : -num;
// }

// DESCRIPTION:
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.

// function whatCanIDrink(age) {
//     if (age <= 0) {
//         alert("Sorry. I can't tell what drink because that age is incorrect!");
//     } else if (age < 14) {
//         alert("Drink Toddy");
//     } else if (age < 18) {
//         alert("Drink Coke");
//     } else if (age < 21) {
//         alert("Drink Beer");
//     } else if (age < 130) {
//         alert("Drink Whisky");
//     } else {
//         alert("Sorry. I can't tell what drink because that age is incorrect!");
//     }
// }
// DESCRIPTION:
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
// Your function should only return a number, not the explanation about how you get that number.


// function getSum(a, b) {
//     let sum = 0;
//     for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
//       sum += i;
//     }
//     return sum;
//   }