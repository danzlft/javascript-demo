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

export function getNextAge(age) {
    if (age){
        return Number.parseInt(age, 10) + 1;
    }
    return 0;
}