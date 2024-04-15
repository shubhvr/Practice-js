//  link : https://www.youtube.com/watch?v=6KNwtNbZ75w
// 1. 8 = function  
// 2. 18 = star pattern in function
// 3. 42 = Return percentange
// 4. 59 = Funtion can call a other function
// 5. 92 = Spread oprator
// 6. 105 = callback function
// 7. 234 = Nasted Funtion with callback function
// 8. 276 = Arrow Funtion
// 9. 294 = setInterval funtion
// 10. 307 = setTimeout




// ****************** Function *****************

// function Add(a, b) {
//     console.log(a + b)
// }
// Add(2, 3);

// ****************** Type of Function *****************
// 1.  Function Declaration - Function Declaration is the traditional way to define a function. It is somehow similar to the way we define a function in other programming languages. We start declaring using the keyword “function”. Then we write the function name and the parameters.

// function add(a, b) {         
//     console.log(a + b);
// }
 
// // Calling a function
// add(2, 3);


// 2. Function Expression - nFunction Expression is another way to define a function in JavaScript. Here we define a function using a variable and store the returned value in that variable.

// const add = function (a, b) {
// 	console.log(a + b);
// }

// // Calling function
// add(2, 3);

// 3.  Anonymous Functions - function ka name nai ho to use anonyumous function bolte hai

// function() {
    // Function Body
//  } 

// ******************** star pattern in funtion ***********************

// 1. Star pattern

// function Star(n) {
//     let Starprint = "";
//     for (let i = 1; i <= n; i++) {
//         for (j = i; j <= n - 1; j++) {
//             Starprint += ' ';
//         }
//         for (k = 1; k <= 2 * i - 1; k++) {
//             Starprint += "*";
//         }
//         console.log(Starprint);
//         Starprint = "";
//     }
// }

// Star(7);




// *************************** Return percentange *********************
//  Return percentange

// function sum (a,b,c,d,e,f){
//     let total = a+b+c+d+e+f;
//     console.log(total)
//     return total;
// }
// function percentange (tt){
// let per = tt / 600 * 100;
// console.log(per )
// }

// let tt = sum(100,100,100,90,100,100);
// percentange(tt)



// ******************** Funtion can call a other function ****************
// Add and Squre = Square + 2

// function Add(a,b) {
//     let Total = a + b;
//     console.log(Total);
//     Sqr(Total);

// }

// function Sqr(Total){
//     let Sqr = Total * Total;
//     console.log(Sqr);
// Qube(Sqr);

// }

// function Qube(Sqr){
//     let Qube = Sqr * Sqr * Sqr;
//     console.log(Qube)
//     console.log("---------------")
// }

// Add(1,2);
// Add(3,5);
// Add(3,2);




///   ********************* Spread oprator ************** 
// color(1,2,3,4,5,6,7,8);

// function color (...num){
//     let sum = 0; 
//     sum ++; 
//     console.log(num)
// }

//  yha spread operator  direct array par nahi lga or variable par lgaya hai  isliye usne array return nahi kiya or usko element ko jodh dega 

// let num = [1,2,3,4,5,6,7];
// console.log(...num)


//  yha spread operator  array mai hi lga hai isliye usne array return kiya or usko element ko todh diya 

// let number  = [1,2,3,4,5,6,7];
// let NewNum = [...number, 8,9,10]
// console.log(NewNum)



// ******************  Callback Funtion ***********************
// function Fun(x){
// x();       // x ko call kiya mean Gun funtion ko call kiya 
// }
// Fun(
//     function Gun (){
//         console.log("Hi ! I am Shubham Patil")
//     });


// 2 way to right // In arrow function 
// Fun = (x) => x();       // x ko call kiya mean Gun funtion ko call kiya 
// Fun(Gun = () => console.log("Hi ! I am Shubham Patil"));\


// function fetchData(callback) {
//     // Simulating asynchronous data retrieval
//     setTimeout(() => {
//       const data = { name: "John Doe", age: 30 };
//       callback(true, data); // Pass null as the error parameter and data as the result
//     }, 2000);
//   }

//   function processData(error, result) {
//     if (error) {
//       console.log("Error:", error);
//     } else {
//       console.log("Data:", result);
//     }
//   }

//   // Call fetchData and pass the processData function as a callback
//   fetchData(processData);






// function Fun(t){
//   function Add(a,b){
//       let sum = a+b;
//       return sum ;
// }
//   let num = Add(4,3);
//   t(num);
//   return num;
// }



// let x = Fun(function Compare(num){
//     if (num % 2 == 0){
//         console.log(num, "number is Even")
//     }
//     else{
//         console.log(num, "number is Odd")
//     }
// });




// function Fun()
// {
//     console.log("Hi By Fun!");
//     let a = 5;
//     function Gun()
//     {
//         console.log("Hi By Gun!",a*a);

//     }
//     return Gun;
// }

// let x = Fun();
// x();





//       ********************** CallBcak Funtion **************************
// function Zero(x){
//   x();
// }
// Zero(() => console.log("Hello Sumit"));


//  One = () => {
//  return("Hello shubham")
// }


// function print(y){
// console.log("This number is " + y)
// }

// function num(a, b){
//   let sum = a + b;
//   console.log(sum)
// print(sum);
// }
// num(2,3);




//     ************** Nasted Funtion with callback funtion *************************
// 1 Way 
// function shubh(x) {
//   x();
//   console.log("Hiiiiii Shubh")

//   function Gurjar(y) {
//     y();
//     console.log("Hiiiiiiiiiiii Gurjar")
//   }
//   Gurjar(x);

// }

// function patil() {
//   console.log("Hii Patil")
// }

// shubh(patil);


// 2nd way with arrow function

// shubh = (x) =>  
// {
//   x();
//   console.log("Hiiiiii Shubh")

//   Gurjar = (y) => {
//     y();
//     console.log("Hiiiiiiiiiiii Gurjar")
//   }
//   Gurjar(x);

// }

// shubh(() => console.log("Hii Patil"));




//   ********************** Arrow Funtion **************

// shubh = () => {
//   return "hello shubh"
// }
// console.log(shubh());




// function myFunc( x, y ) {
//   y(x);
// }

// myFunc( 'Shubh', (a) => {console.log(a)});



//  *********************   setInterval funtion  ****************
// use :  sliding image


// function Fun(){
//   console.log("Hello Shubh")
// }

// setInterval(Fun, 1000);


// setInterval(() => {console.log("Hello")}, 1000);



//          ******************** setTimeout *************************

// function fetchData(callback) {
//   // Simulating asynchronous data retrieval
//   setTimeout(() => {
//     const data = { name: "John Doe", age: 30 };
//     callback(null, data); // Pass null as the error parameter and data as the result
//   }, 2000);
// }

// function processData(error, result) {
//   if (error) {
//     console.log("Error:", error);
//   } else {
//     console.log("Data:", result);
//   }
// }

// // Call fetchData and pass the processData function as a callback
// fetchData(processData);



//          ******************** factory function  *************************
// object ki memory hum nai banate hia funtion khud object bna le ise factory function kahte hai

    // function person(name, age){

    //     let obj = {};
    //     obj.name = name;
    //     obj.age = age;
    //     return obj;

    // }

    // let p1 = new person("Shubham", 27);
    // console.log(p1)
















