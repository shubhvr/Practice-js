//1. Write a Node.js program using if-else statements to check if a number is positive, negative, or zero.
// let num = 0;

// if(num<0){
//      console.log( num + " : is nagative number")
// }else if (num ==0){
//     console.log( num + " : is Zero number")
// }else{
//     console.log( num + " : is Positive number")
// }


//            *************************************

//2. Create a program to determine if a given number is even or odd using if-else.
// let number = -33;

// if(number % 2 == 0 ){
//     console.log( number + " : is Even number")
// }else if (number % 2 == 1){
//     console.log( number + " : is Odd number")
// }else{
//     console.log( number + " : is Invalid number")
// }




//            *************************************

// 3. Write a Node.js program that takes a user's age as input and determines if they are eligible to vote (age >= 18).
// let age = 101;

// if (age <= 0 || age >= 100) {
//     console.log('please enter a valid age.')
// } else {

//     if (age >= 18 && age < 100) {
//         console.log("Your age is " + age + " year So you are eligible for vote");
//     } else {
//         console.log("Your age is " + age + " year So you are not eligible for vote");
//     }
// }



//            *************************************

// 4. Implement a program to find the maximum of three numbers using nested if statements.

// let i =2;
// let j =2;
// let k =2;

// if(i>j && i>k){
// console.log(i)
// if(j>i && j>k){
// console.log(j)
// if(k>i && k>j){
// console.log(k)
// }
// }
// }


//            *************************************

// 5. Create a program that checks if a year is a leap year (divisible by 4 but not by 100 or divisible by 400) using logical operators.
// let year = 2028;

// if(year % 4 ==0 && year % 100 != 0 || year % 400 ==0){
// console.log(year + " is leap year");
// }else{
//     console.log(year + " is not leap year");
// }



//            *************************************


// 6. Write a Node.js program to determine if a given character is a vowel or a consonant using if-else.

// let vowel = "b";

// if(vowel==="a" || vowel==="e" || vowel==="i" || vowel==="o" || vowel==="u"){
// console.log(vowel + " is vowel");
// }else{
//     console.log(vowel + "consonent")
// }



//            *************************************


// 7. Create a program that calculates the grade of a student based on their score (A, B, C, D, or F).
// let per = 101;

// if (per >= 80 && per <= 100) {
//     console.log("Your Grade is A++");
// } else if (per >= 75 && per < 80) {
//     console.log("Your Grade is A+");
// } else if (per >= 60 && per < 75) {
//     console.log("Your Grade is A");
// } else if (per >= 45 && per < 60) {
//     console.log("Your Grade is B");
// } else if (per >= 33 && per < 45) {
//     console.log("Your Grade is A");
// } else if (per <= 33 && per >= 0) {
//     console.log("Better luck next Time");
// } else if(per < 0) {
//     console.log("Please Enter valid number")
// } else {
//     console.log("Please do not accept above the 100")
// }



//            *************************************

// 8.  Write a Node.js program to determine if a number is within a given range (between 1 and 100).
// let num = 1;

// if (num >= 1 && num <= 100){
// console.log(num)
// }else{
//     console.log("Please enter valid number its range 1 to 100")
// }



//                              ************************************



//            *********************************

//  9.  Implement a program that checks if a string is a palindrome (reads the same forwards and backwards).


// let n = 123;
// let n2 = n;
// let Reverse = 0;

// while (n > 0) {

//     let Remainder = n % 10;
//     Reverse = Reverse * 10 + Remainder;    // Remainder niaklne k liye devide karna jaruri hai kya or yadi jaruri hai to
//     n = parseInt(n / 10);       // devide krne se num ki ek digit kam hoti jati hai 
// }
// console.log(Reverse);

// if (Reverse == n2) {
//     console.log("Nuber is pelindrom");
// } else {
//     console.log("Nuber is not pelindrom");
// }


//            *************************************

// Count the number

// let num = 12;
// let count =0
// while(num>0){
//     num = parseInt(num / 10) ;
//      count = count + 1;
// }
// console.log(count)



//            *************************************

//  Verify the prime number (Khud se ya 1 se devide ho)



//            *************************************

// 10.  Create a program to calculate the factorial of a number using an if-else loop.

// let n = 5;
// let factorial = 1;
// for(let i = n; i>=1; i--){
//  factorial = i * factorial;
//  }
// console.log(factorial)

//  let num = 3;

//  // checking num value is nagative
//  if (num < 0){
//     console.log("Factorial number is does not exist")
//  }else if (num == 0){
// console.log('The factorial of 0 is 1');
//  }
// else{

//     if(num > 0){
//         let factorial = 1;
//         for(let i=1; i<=num; i++){
//             factorial = factorial * i ;
//         }
//         console.log(factorial);
//     }
// }


//            *************************************

// 11. Write a Node.js program that determines if a given year is a century year (ends with '00').

// let year = 2100;
// let i = 1;
// let num = year;

// while (i <= 2) {
//     let Remainder = num % 10;
//     console.log(Remainder)
//     if (Remainder == 0 && i == 2) {
//         console.log(year + ' YEAR CENTURY YEAR')
//     } else if (Remainder != 0) {
//         console.log(year +  ' not century year');
//         break;
//     }
//     i++;
//     num = parseInt(num / 10)
// }



// let year = 2010;

// let Remainder = year % 100;
// if (Remainder == 0) {
//     console.log(year + ' year is century year');
// } else {
//     console.log(year + ' year is not a century year');
// }


//            *************************************


//  12.  Implement a program to check whether a number is even and a multiple of 3.

// let n = 1;

// for (let i = n; i <= 50; i++) {
//     if (i % 2 == 0 && i % 3 == 0) {
//         console.log(i)
//     }

// }


//            *************************************


// 13. Create a program that compares two numbers and prints the larger number using an if-else statement.
//  let a = 518;
//  let b = 63;

//  a>b ? console.log(a) : console.log(b)



//            *************************************

// 14. Write a Node.js program that checks if a person is eligible for a mall discount (age <= 80 or age >= 65 and a member).
// let age = 68;
// let member = true;

// if (age >= 65 && age <= 80) {
//     if (member = true) {
//         console.log("This person is eligibel for discount")
//     }
// }
// else {
//     console.log("This person is not eligibel for discount")
// }



//            *************************************

// 15.  Implement a program that determines if a triangle is equilateral, isosceles, or scalene based on the side lengths.
// scalene trangle =   s1 != s12 != S3
// equilateral  =     s1 == s12 == S3
// isosceles   =       s1 == s12 != S3
// Scalene Triangle	                 |         Isosceles Triangle	           |  Equilateral Triangle
// All three sides are unequal       |    Any two sides are equal              |  	All three sides are equal                                |                                         | 
// All three angles are different    |   Angles opposite to equal sides are equal |	All three angles equal to                                                                                         60 degrees

// let s1 = "2"
// let s2 = "3"
// let s3 = "1"

// if(s1 == s2 && s2 == s3){
// console.log("Trangle is Equilateral")
// } else if (s1 != s2  && s2 != s3){
//     console.log("Trangle is scalene")
// }else {
//     console.log("Trangle is isosceles")
// }



//            *************************************

// 16 . Create a program to check if a given string contains both uppercase and lowercase letters.
// Use ASCII value for 
// Uppercase = 65-90
// Lowercase = 97-122
// Special character = 32-47 / 58-64 / 91-96 / 123-126

// let char = "j"; 

// if (char >= "A" && char <= "Z") {
//     console.log(char + " is Uppercase")
// } else if (char >= "a" && char <= "z") {
//     console.log(char + " is Lowercase")
// } else if (char >= "!" && char <= "/" || char >= ":" && char <= "@" || char >= "[" && char <= "`" || char >= "{" && char <= "~") {
//     console.log(char + " is Special character")
// }else{
//     console.log("Please enter valid text")
// }


//            *************************************

// 17. Write a Node.js program to determine if a person is a teenager (age between 13 and 19) and not a child or an adult.
// let age = 19;

// if (age >= 13 && age <= 19) {
//     console.log('Person is Teenagger')
// } else if (age < 13) {
//     console.log('Person is an child')
// } else {
//     console.log('Person is an Adult')
// }


//            *************************************

// 18.  Implement a program that determines if a year is a leap year and also checks if it is a multiple of 5.

// let year = 2017;

// if (year % 4 == 0 && year % 100 != 0 || year % 100 == 0) {
//     if (year % 5 == 0) {
//         console.log(year + " It is a multiple of 5");
//     } else {
//         console.log(year + " It is a leap year but not a  multiple of 5");
//     }
// } else {
//     console.log(year + " is not leap year")
// }


//            *************************************

//  19.  Create a program that checks if a given number is positive, even, and a multiple of 7.


// for (let i = 1; i <= 100; i++) {
//     if (i >= 0 && i % 2 == 0 && i % 7 == 0) {
//         console.log(i + " This number is a positive, even, and a multiple of 7 ")
//     } else {
//     }
// }


//            *************************************

// 20.  Write a Node.js program using logical operators to determine if a given character is an alphabet, a digit, or a special character.



//            *************************************

// 21. Write a Node.js program that takes three numbers as input and determines if they can form a valid triangle based on the triangle inequality theorem.

