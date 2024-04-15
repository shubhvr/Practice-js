// palindrom number with Array

// let num = [121, 183, 354, 131, 72, 87, 787, 909, 9900]


// for (i of num) {
//   let Reverse = 0;
//   let pelidrom = i;
//   let pelidrom2 = pelidrom;

//   while (pelidrom > 0) {
//     reminder = pelidrom % 10;
//     Reverse = Reverse * 10 + reminder;
//     pelidrom = parseInt(pelidrom / 10);
//   }

//   if (Reverse == pelidrom2) {
//     console.log(pelidrom2 + " is palindrom number")
//   }

// }




//                                            *********************************************


//  ##  prime number with array
// khud se or 1 se devide ho
// 1. divide 2<  
// 2.  bydefalut prime; true
// 3. yadi num is dividable other number prime: false (break)

// let num_Arr = [21,11,31,3,81,99,45,17,5]

// for (i of num_Arr) {
//   let prime = i;
//   let FindPrime = true;

//   for (let j = 2; j < prime; j++) {
//     if (prime % j == 0) {
//       FindPrime = false;
//       break;
//     }
//   }
//   if (FindPrime == true) {
//     console.log(prime)
//   }
// }



// arremestrong with array
// step follow
// 1. Digit count (Devide)
// 2. find remainder
// 3. square of remainder
// 4. sum of square of the remainder
// 5. compare with number

// let arr = [131, 153, 21, 67, 4, 100]

// for (i of arr) {
//   let D = i;
//   let D2 = D;
//   let count = 0;

//   while (D > 0) {
//     D = parseInt(D / 10);
//     count++;
//   }
//   D = D2;
//   let Remainder = 0;
//   let square = 0;

//   while (D > 0) {
//     Remainder = D % 10;
//     square += Math.pow(Remainder, count);
//     D = parseInt(D / 10);
//   }
//   D = D2;
//   if (square == D2) {
//     console.log(D2 + " number is arrmestrong number")
//   }
// }




//                                            *********************************************

// 1. Find the even number in the array string.

// let num = [2, 6, 56, 4, 7, 9, 1, 33, 34, 57, 131, 44]
// for (let i of num) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }
// }


//                                            *********************************************

// 2. Armestrong number
// 153  (1 ka square 3, 5 ka square 3, 3 ka square 3) / jitni digit hoti hai utani hi power har digit par kakre uska sum nikalna hota hia sum k bad yadi number same hai to vo armestrong number hota hai.

// step follow
// 1. Digit count (devide)
// 2. find remainder
// 3. square of remainder
// 4. sum of square of the remainder
// 5. compare with number

// let num = 123;
// let n2 = num;
// let count = 0

// while (num > 0)
// {
//     num = parseInt(num / 10);
//     count++;
// }
// num = n2;
// let result=0

// while (n2 > 0)
// {
//     let Remainder = n2 % 10;
//     result += Math.pow(Remainder, count)
//     n2 = parseInt(n2 / 10)
// }

// if(result == num)
// {
// console.log(num + " is armestrong number")
// }else
// {
//     console.log(num + " is not armestrong number")
// }



