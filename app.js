// let h1 = document.createElement('h1');
// let span = document.createElement('span');

// span.innerText = "Random text";
// h1.appendChild(span);

// h1.classList.add('custom-class');

// document.body.append(h1);


// let lowerName = " ";

// lowerName = (name) => {
//     return name.toLowerCase();
// }

// console.log(lowerName("SAM"));
// console.log(lowerName("AiRi"));

// let getCharCount = " ";

// getCharCount = (str) => {
//     return str.length;
// }

// console.log(getCharCount("Sam 25"));


// let language = "JavaScript";

// console.log(language.length);


// let charLength = "";

// charLength = (name) => {
//     return name[name.length - 1];
// }

// console.log(charLength("Akari"));


// let someString = "JavaScript";

// console.log(someString.substring(1, 4));
// console.log(someString.substring(4));

// let skipFirstCharacter = "";

// skipFirstCharacter = (text) => {
//     return text.substring(1);
// }

// console.log(skipFirstCharacter("Akari"));


// //String Interpolation//

// let js = "JavaScript";
// console.log(`I am learning ${js}!`);


// //Complete the function capitalize such that it capitalizes the word parameter it receives.

// let capitalize = " ";

// capitalize = (word) => {
//     return word[0].toUpperCase() + word.substring(1).toLowerCase();
// }

// console.log(capitalize("sam")); // Output: "Sam"
// console.log(capitalize("ALEX")); // Output: "Alex"
// console.log(capitalize("chARLie")); // Output: "Charlie"



// //Make a simple function called greet that returns the most-famous "hello world!".

// let greet = "";

// greet = () => {
//     console.log("hello world!");
// }


//Array Examples

// const users = []; //empty array
// const grades = [5, 20, 15, 30]; //array of numbers
// const atendees = ["Sam", "Alex"]; //array of strings
// const values = [10, false, "John"]; //mixed array


// console.log(grades.length);
// atendees.unshift("Akari");

// console.log(atendees);


//Array forEach

//Declare a constant variable array
//Variable of the array .forEach() //empty for now until we declare the function name
//Declare function name

/*
const numbers = [25, 3, 8, 18, 10]
numbers.forEach(myFunction) 
                    
                    value, index, array
function myFunction (text, length, arr) //the function takes 3 arguements{
    console.log(text);
}    
*/

//Calculate the sum of the numbers from the array
//Get value from the function 
//Log sum += value

// const numbers = [5, 13, 9, 18, 9];
// let sum = 0;

// numbers.forEach((value) =>{
//     sum += value;
// })

// console.log(sum);

//Count how many times a letter appears inside an array

// const letter = ['a', 'b', 'c', 'd', 'a', 'd', 'a', 'a'];
// letter.push('a');
// letter.push('b', 'b', 'b', 'b');

// let count = {};

// letter.forEach((value) => {
//     if(count[value]) {
//         count[value]++;
//     }
//     else{
//         count[value] = 1;
//     }
// })

// console.log(count);


// const names = ["Sam", "Charlie", "Alex"];

// names.forEach(loopThroughElements);

// function loopThroughElements (value) {
//     console.log(value);
// }



// function logUserIds(userIds) {

//     userIds.forEach(function(userID){
//         console.log(userID);
//     });
//     return true;

// }

// logUserIds([10, 15, 14]);


// const sumOddNumbers = [15];
// sumOddNumbers.forEach(numbers);

// function numbers (number){
//     if(numbers % 2 === 1){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const persons = [
//     {
//         name: "Akari",
//         age: 22
//     },
//     {
//         name: "Ivan",
//         age: 25
//     },
//     {
//         name: "Liam",
//         age: 30
//     }
    
// ];

// let namae = persons.find(myPerson);

// function myPerson (person){
//     return person.name === "Akari";    
// }

// console.log(namae);



//Array Methods Practice
//Array .forEach() - method
//get sum of the array
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(item => {
//     sum += item
// });
// console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(function sumOfNum(value){
//     sum += value;
// });
// console.log(sum);

//find the total sum of each array value
// const initials = ['a', 'b', 'c', 'd', 'e', 'a', 'a', 'b', 'a'];
// let total = {};
// initials.forEach(value => {
//     if(total[value]){
//         total[value]++;
//     }
//     else{
//         total[value] = 1;
//     }
// });
// console.log(total)

// const names = ["John", "Taylor", "Fender"];
// names.forEach(namae => console.log(`${namae}`));


//Array .filter() - method

// const positiveNum = [1, -5, -29, 5, 23];
// const filtered = positiveNum.filter(value => value >= 0);

// console.log(filtered);


//Array .find() - method

// const onamae = ["Jackson", "Ivan", "Michel"];

// const result = onamae.find(ivanName);

// function ivanName (ivanValue){
//     return ivanValue === "Ivan";
// }
// console.log(result);

// const onamae = [
//     {
//         name: "Arthur",
//         age: 23
//     },
//     {
//         name: "Kenny",
//         age: 42
//     },
//     {
//         name: "Smith",
//         age: 55
//     }
// ];

// const personResult = onamae.find(function(personData){
//     return personData.age === 55;
// });
// console.log(personResult);


//Array .map() - method

// const randomNames = ["akari", "sam"];
// // const upperCase = randomNames.map(function(randomName){
// //     return randomName.toUpperCase();
// // })
// // console.log(upperCase);
// const upperCase = randomNames.map(randomName => randomName.toUpperCase());
// console.log(upperCase);


// const randomNumbers = [23, 24, 8, 6];
// const doubleNumber = randomNumbers.map(function(randomNumber){
//     return randomNumber * 2;
// });
// console.log(doubleNumber);
// const doubleNumbers = randomNumbers.map(randomNumber => randomNumber * 2);
// console.log(doubleNumbers);


//Array .includes() - method

// const fruits = ["Tomato", "Apple", "Banana"];

// const output = fruits.includes("Orange");
// const output2 = fruits.includes("Tomato");
// console.log(output, output2);

//Array .join() - method

// const countries = ["Japan", "Korea", "Italy"];
// let res = countries.join(', ').toUpperCase();
// console.log(`I want to visit ${res}`);



// const grades = [80, 70, 85, 90, 88];

// let n = 0;
// let avg = "";

// const totalGrades = grades.forEach(function(grade){
//     n += grade;
//     avg = n % 5;
// });

// console.log(n);

//Array Exercises

// const isArray = function(input){
//     if(toString.call(input) === "[object array]"){
//         return true;
//     }
//     return false;
// }

// console.log(isArray('w3resource'));
// console.log(isArray([1, 2, 4, 0]));


//Add7

// let userInput = window.prompt("Input a number: ");
// let add7 = 7;

// console.log(Number.parseInt(userInput, 10) + add7);


//Write a function called multiply that takes 2 numbers and returns their product.
// prompt user to input two nums
// parseInt string input into a num data type
// multiply num1 & num 2
// return output



/*Write a function called capitalize that takes a string and returns that string with only 
the first letter capitalized. 
Make sure that it can take strings that are lowercase, UPPERCASE or BoTh. */

// function capitalize (values) {
//     return values[0].toUpperCase() + values.substring(1);
// }

// console.log(capitalize(window.prompt("Input a string: ")));


/*Write a function called lastLetter that takes a 
string and returns the very last letter of that string: */
//  prompt user to input a string
//  length of string [string - 1]
//  return output

// function lastLetter(lastString) {
//     return lastString[lastString.length - 1];
// }
// console.log(lastLetter(window.prompt("Input a string to display the last letter: ")));


// let today = new Date();
// const year = today.getFullYear();
// console.log(year);
// let day = today.getDate();
// console.log(day);


// const myAge = 22;
// const dogYears = 7;

// const myDogAge = myAge * dogYears;
// console.log(myDogAge);



// function sumGrades(grades){
//     let sum = 0;
//     grades.forEach(function(grade){
//         sum += grade;
//     });
//     return sum;
// }

// console.log(sumGrades([15, 5, 10]));

const body = document.body;
body.append();

const navDiv = document.createElement("div");
navDiv.className = "navDiv";
body.append(navDiv);

const logo = document.createElement("div");
logo.className = "logo";
logo.textContent = "花火";
navDiv.append(logo);

const navLinks = document.createElement("div");
navLinks.className = "links";
navDiv.append(navLinks);

const home = document.createElement("li");
home.textContent = "Home";
navLinks.append(home);

const more = document.createElement("li");
more.textContent = "More";
navLinks.append(more);

const about = document.createElement("li");
about.textContent = "About";
navLinks.append(about);

// Btn
const contactBtn = document.createElement("button");
contactBtn.className = "btn";
contactBtn.textContent = "Contact";
navDiv.append(contactBtn);
