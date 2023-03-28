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
function longest(s1, s2) {
    return [...new Set((s1 + s2).split(''))].sort().join('')
}