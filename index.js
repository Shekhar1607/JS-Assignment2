//Q.1 Add two numbers

let A = 32;
let B = 41;
let result = A + B;
console.log('Addition of two numbers is' , result);

//Q.2 Find the conditions are obeyed or not?

let a = 49;
let b = 49;
let condition = (a >= b && a == b);
console.log('Conditions are obeyed or not?',condition);

/*Q3.Check the conditions 
 You are given two numbers A and B. You need to do the following checks:
-if both are divisible by 10 console true.
-if both are not divisible by 10 console false.
-if one of them only is divisible by 10 console true.
*/

let num1 = 30;
let num2 = 56;

if (((num1 % 10) == 0) && ((num2 % 10) == 0))
    console.log('true');
else if (((num1 % 10) != 0) && ((num2 % 10) != 0))
    console.log('false');

else if (((num1 % 10) != 0) || ((num2 % 10) != 0))
    console.log('true');
else
    console.log('input invalid');


//Q.4 Find first digit of 4 digit number

let number = 4582;
let firstDigit = 4582 / 1000;
console.log('First digit of 4 digit number is' ,Math.floor(firstDigit));

//Q.5 Find last digit of 4 digit number 

let number1 = 2593;
let lastDigit = 2593 % 10;
console.log('Last digit of 4 digit number is', lastDigit);

//Q.6 Find the remainder

let num3 = 35;
let num4 = 4;
let modulus = num3 % num4;
console.log('Remainder is' ,modulus);

//Q.7 Multiply two numbers

let num5 = 22;
let num6 = 2;
let product = num5 * num6;
console.log('Product of two numbers is',product);

//Q.8 Marks Calculator

let sub1 = 65;
let sub2 = 55;
let sub3 = 75;
let total = (sub1 + sub2 + sub3);
let average = (total / 3);
console.log('Total marks' ,total);
console.log('Average of marks',average);





