// let row = 4
// let x = "";


// // this script for coloumn 
// for (let i = 1; i<=row; i++) {

//     // this script for space
//     for(let j=i; j<=row-1; j++){
//            x = x + " ";

//     }
//        // this line for print
//     for (let k = 1; k <= (2 * i) - 1; k++){
//          x = x + "*";
//     }
//     console.log(x);
//     x = "";
// }






// for(let i = 1; i<=4; i++){
//     let x ="";
// for(let j=1; j<=i; j++){
//     x= x+j;
// }
// console.log(x);

// }


// //  star print
// let x = "";
// for(let i=1; i<=4; i++){


//    for( 
//     let j=i; j<=4-1; j++){

//      x +=" "
//    }
//    for(let k=1; k<=2*i-1; k++){
//       x += "*";   
//    }
//    console.log(x);
//    x ="";
// }



//   *********## For LOOPS ##*****************

//  1. Create a Node.js program to find the sum of natural numbers from 1 to N using a while loop.
// let n =10; 
// let sum = 0;
// let i =1;
// while(i<=n){
//     sum = sum + i;
// i++;
// } 
// console.log(sum)


//            *************************************

// 2. Write a program to reverse a given number using a while loop.
// let i =  1;
// let j = 5;
// let reverse=j;

// while(j>=i){
//     console.log(reverse)
// reverse = reverse - i;
// j--;
// }



//            *************************************

// 3. Implement a program to find the GCD (Greatest Common Divisor) of two numbers using a while loop.


// 4.  Create a program to check if a string is a palindrome using a while loop.
// let N = 313;
// let N2 = N;
// let reverse = 0;

// while(N > 0){
//  let modu = (N % 10);
//  reverse = reverse * 10 + modu;
//  N = parseInt(N / 10);  
// }

// if (reverse == N2){
//     console.log(reverse + " is palindrom number")
// }else{
//     console.log(reverse + " is not palindrom number")
// }


//            *************************************

// 5. Write a Node.js program to find the first N terms of the geometric progression (GP) using a while loop.



//   *********## Nasted LOOPS ##*****************

// 1. Implement a program to print a multiplication table for numbers 1 to 5 using nested for-loops./

// let table =1;
// let a = 1;

// for(let j = a; j<=5; j++){
// for(let i = 1; i<=10; i++){
//     table = i * a;
//     console.log(table)
// }
// a++;
// }


//            *************************************

// 2. Create a program to print a pattern of stars in a diamond shape using nested for loops.
// let star = ""
// for (let i = 1; i <= 4; i++) {
//     for (let j = i; j <= 4 - 1; j++) {
//         star += " "
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         star += "*"
//     }
//     console.log(star);
//     star = "";
// }


// let n = 6;
// let print = ''

// for (let i = 1; i <= n; i++) {
//    // console.log(i)
//    for (let j = i; j <= n-1; j++) {
//       print += "-"
//       // console.log(print)
//    }
//    for (let k = 1; k <= i; k++) {
//       print += "*"
//    }
//    console.log(print)
//    print = ''
// }





//                         **************   ## LOOPS ##  ***********************



//            **************   ## LOOPS ##  ***********************
//   *********## For LOOPS ##*****************

// 1. Write a Node.js program to print the numbers from 1 to 10 using a for loop.

// let num = 1;
// for(let i = num; i<=10; i++){
// console.log(i)
// }


//            *************************************

// 2. Create a program that calculates the sum of all even numbers between 1 and 100 using a for loop.
// let num = 1;
// let sum = 0;

// for(let i=num; i<=100; i++){
//   if( i % 2 == 0 ){
//       sum = sum + i;
//     }
// }
// console.log(sum)


//            *************************************

// 3.  Write a Node.js program to print a multiplication table for a given number (e.g., 5).
// let n = 5;


// for (i = 1; i <= 10; i++) {
//     let table = n * i;
//     console.log(table);
// }

//            *************************************

// 4. Implement a program that counts the number of vowels in a given string using a for loop.

// let string = "shubham"
// // let vowel = [0]

// for (i of string) {
//     if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i == 'u') {
//         console.log(i)
//     } else {
//     }
// }




//            *************************************

// 5. Create a program that prints the Fibonacci sequence up to the 10th term using a for loop.
// let n = 10;
// let a = 0;
// let b = 1;
// let sum =0;

// for(let i = 0; i <= n; i++)
// {
// sum = a + b;
//  a = b;
//  b = sum;
// }
// console.log(sum)


//            *************************************

// 6. Write a Node.js program to find the factorial of a number using a for loop.
// let n = 5;   // 5*4*3*2*1
// let Fact=1;

// for(i=1; i<=n; i++){
//  Fact = Fact * i;
// }
// console.log(Fact)


//            *************************************

// 7. Implement a program that prints a pattern of stars in a right-angled triangle using nested for loops.

// for (let i=1; i<=5; i++){
//    let stars = "";
//    for(let j=1; j<=i; j++){
//     let j = "*"
// stars = stars + j;
//    }
//    console.log(stars)
// }


//            *************************************

// 8. Create a program that generates a list of squares for the numbers from 1 to 10 using a for loop.


// for(let i = 1; i<=10; i++){
// console.log(i + " * "  + i  + " = "+ (i*i))
// }



//            *************************************

// 9. Write a Node.js program to find the largest element in a list using a for loop.

//            *************************************

// 10. Implement a program to check if a given number is prime using a for loop.

// let n = 45;
// let isPrime = true;
// // 2/ 32
// for (let i = 2; i < n; i++)
// {

//     if (n % i == 0)
//     {
//         isPrime = false;
//         break;
//     }
// } if (isPrime == true)
// {
//     console.log(n + " number is Prime")
// } else
// {
//     console.log(n + " number is composite")
// }


//            *************************************


//            *************************************

// 3. Write a Node.js program to generate a 2D matrix of numbers from 1 to 9 using nested for-loops.





// console.log("7" + 2 - 1);          // 71

// console.log([1,2,3].slice(0,1))
