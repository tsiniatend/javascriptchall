//VERY EASY: Create two variables and assign a number to each. Console log the difference between the numbers. Example output: “The difference between 6 and 2 is 4”

var a = 6;
var b = 2;
console.log(`difference between ${a} and ${b} is ${a - b}`);

//EASY: Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                       Example output: “The name Thomas is longer than John by 2 characters”

var firstName = "Endalkachew";
var lastName = "Tsiniate";
if (firstName.length > lastName.length) {
    console.log(`the name ${firstName} is longer than ${lastName} by ${firstName.length - lastName.length} characters`);
} else {
    console.log(`the name ${lastName} is longer than ${firstName} by ${lastName.length - firstName.length} characters`);

}


//MEDIUM: Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.

const word = prompt("Please enter a word!");

if (word === word.toUpperCase()) {
    console.log('This person is shouting ${word}.');

} else if (word === word.toLowerCase()) {
    console.log(`This person is whisperring ${word}.`);

} else {
    console.log(`This person is talking like a normal person!`);
}


//HARD: Create 4 math functions, one called add() that adds 2 numbers, one called subtract() that subtracts 2 numbers, one called multiply() to multiply 2 numbers, and one called divide() to divide two numbers.
function addition(x, y) {
    return console.log(x + y)

}
addition(2, 2)

function subtract(x, y) {
    return console.log(x - y)

}
subtract(2, 2)

function divide(x, y) {
    return console.log(x % y)

}
divide(2, 2)

function multiply(x, y) {
    return console.log(x * y)

}
multiply(2, 2)


//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
let number1 = 1;
let number2 = 2;

function add(number1, number2) {
    return console.log(`${number1} + ${number2} = ${number1 + number2}`);
}
function multiply(number1, number2) {
    return console.log(`${number1} * ${number2} = ${number1 * number2}`);
}
function substract(number1, number2) {
    return console.log(`${number1} - ${number2} = ${number1 - number2}`);
}
function divide(number1, number2) {
    return console.log(`${number1} / ${number2} = ${number1 / number2}`);
}

add();
multiply();
subtract();
divide();


const numberl = Number(prompt("Please enter the first number"));
const operation = prompt("Enter the operation");
const number2 = Number(prompt("Please enter the second number"));

if (operation === '+' || operation === 'add') {
    add(number1, number2);
}
if (operation === '-' || operation === 'subtract') {
    subtract(number1, number2);
}
if (operation === '*' || operation === 'multiply') {
    multiply(number1, number2);
}
if (operation === '/' || operation === 'divide') {
    divide(number1, number2);
}