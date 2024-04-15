// 1. 5 = Create normal object
// 2. 26 = (get data) Object create with class 
// 3. 51 = set data Object create with class
// 4. 76 = Constructor
// 5. 99 = setter function in the counstructor
// 6. 124 = Inheritance (Extends of class)           3 types  1. Prototypal 2. peseudo classical  3. functional  (11/397)
// 7. 247 = super (Parent k constructor ko chalana)
// 8. 266 = (Polymorphism) Over Loading
// 9. 287 = (Polymorphism) Over Riding
// 10. 366 = Duck typing
// 11. 397 = Functional inheritance




//                    **************************************************************************




// 1.     *************** Create normal object ***********************

// let P1 = {
//     name: "shubham",
//     Age: 29,
//     Skills: () => console.log("Hiii")
// }
// let P2 = {
//     name: "Rahul",
//     Age: 25,
//     Skills: function() { console.log("Hello")}
// } 
//     // console.log(P1.Skills)
//     P1.Skills()
//     console.log(P2.name + " " + P2.Age + " " + P2.Skills);






// 2.      ***************(get data) Object create with class *****************


// class Person {
//     Name
//     Age
//     getData() {
//         console.log(this.Name);
//         console.log(this.Age);

//     }
// }

// let p1 = new Person();
// p1.Name = "Shubham";
// p1.Age = 27;
// p1.getData();

// let p2 = new Person();
// p2.Name = "Hitesh";
// p2.Age = 29;
// p2.getData();


 // 3.       ******************** set data Object create with class  ******************

//   class Person {
//     Name
//     Age
//     setData (N, A){
//          this.Name =  N;
//          this.Age = A;
//     }
//     getData() {
//         console.log(this.Name);
//         console.log(this.Age);

//     }
// }

// let p1 = new Person();
// p1.setData("Shubham", 27)
// p1.getData();

// let p2 = new Person();
// p2.setData("Hitesh", 90)
// p2.getData();


// 4.       ******************** Constructor   ******************

 // constructor function apne ap chalta hai isko call karne ki need nai hoti hai 
 //  aise kam jo bydefoult krna hi hia to constructor ka use karte hai (page refresh)
 // her ek object k bad chalega 
 //  kuch bhi return nai karega //  argument le skte hai //  setter ka kam kar skte hai 
 //  object m constructor se pahle kuch nai chal skta 


// class Person {
//     constructor(){
//         console.log("Hello shubham")
//     }
// }
// let p1 = new Person();
// let p2 = new Person();



// 5.   ******************** setter function in the counstructor ************
// class Person {
//         Name
//         Age
//         constructor (N,A){
//             this.Name =  N;
//              this.Age = A;
//         }
    
//         /// data ko get karne k liye getter function use karte hai //  print krne k liye 
//         getData() {
//             console.log(this.Name);
//             console.log(this.Age);
    
//         }
//     }
    
//     let p1 = new Person("Shubham", 27);
//     p1.getData();
    
//     let p2 = new Person("Hitesh", 90);
//     p2.getData();



// 6.   ******************** Inheritance (Extends of class) ************
//          Types 3 
//  1. single          class B ---call----> class A
//  2. Multilevel      class C ---call----> class B ---call----> class C 
//  3. Hierarchial     class B ---call----> class A <---call---- class C

// 1. single    {class B ---call----> class A}
// class Cars {
// Door
// Side_Glass
//     Typer
//     Staring

//     set(D, SG, T, Sty){
//         this.Door = D;
//         this.Side_Glass = SG;
//         this.Tyer = T;
//         this.Staring = Sty;
//     }

//     getInfo(){
//         console.log("Door :- ",  this.Door);
//         console.log("Side_Glass :- ", this.Side_Glass);
//         console.log("Tyer :-", this.Tyer);
//         console.log("Staring :- ", this.Staring);
//     }
// }

// class Audi extends Cars{

//     color = "Red";
//     Speed = 300;

//     getAudiData(){
//         this.getInfo();
//         console.log("color :- ",this.color);
//         console.log("Speed :- ",this.Speed);
//     }
// }
// let  car = new Cars();
// car.set(2,3,4,5)
// car.getInfo();


// console.log("======================================")

// let Audi_Details = new Audi();
// Audi_Details.set(2,3,4,5)
// Audi_Details.getAudiData();



// 2. 2. Multilevel      class C ---call----> class B ---call----> class C 
// class Cars {
//     Door =  5;
//     Side_Glass = 2;
//     Typer = 5;
// }

// class Audi extends Cars{

//     color = "Red";
//     Speed = 300;
// }
// class Tata extends Audi{

//     Staring = 1; 
// }
// let Audi_Details = new Audi();
// console.log(Audi_Details)


// let Tata_Details = new Tata();
// console.log(Audi_Details)




//  3. Hierarchial     class B ---call----> class A <---call---- class C

// class Cars {
//     Door =  5;
//     Side_Glass = 2;
//     Tyer = 5;

//     getData(){
//         console.log("Door :- ",  this.Door);
//         console.log("Side_Glass :- ", this.Side_Glass);
//         console.log("Tyer :-", this.Tyer);
//     }
// }

// class Audi extends Cars{

//     color = "Red";
//     Speed = 300;

//     getInfo(){
//         console.log("color :- ",this.color);
//         console.log("Speed :- ", this.Speed);
//         console.log("-------------")
//     }
// }
// class Tata extends Audi{

//     Staring = 1;

//     getInfoTata(){
//         console.log("****************************")
//         this.getData();
//         this.getInfo();
//         console.log("Staring :- ", this.Staring);
//         console.log("-------------")
//     } 
// }

// let Audi_Details = new Audi();
// // Audi_Details.getInfo();

// let Tata_Details = new Tata();
// Tata_Details.getInfoTata();



//  7. **************** super (Parent k constructor ko chalana) ***********

// class A {
//     constructor(){
//         console.log("Hii by A")
//     }
// }

// class B extends A {
//     constructor(){
//         super();          // super parent/super/base class constructor ko call karne k liye use karte hai 
//         console.log("Hi by B")
//     }
// }

// let Bj = new B();


// 8.  *********************** (Polymorphism) Over Loading    ******************


// function Add (a = 0, b = 0) {
// if (a && b){              //(a && b) ka matlb hai usme koi bhi data argument m diya hua hai //  ye bydefouldt parameter(a = 0, b = 0) ko nahi manega  
// console.log(a+b);
// }else{
//     console.log("No Numbers")
// }
// }
// Add();
// Add(6,7);


// 9.  *********************** (Polymorphism) Over Riding    ******************
// child function parent function ki proprty ko badal dena or change kr dena overriding kahte hai. 
// or bahi constructor k jaisa pressure bhi nai hai ki parent or child dono ka chlana hai ya super lagana pade.
// jo karib ka hai function vo chalega yadi child ka nai h to parent ka chlega otherwise child ak hi chalega.

// class parent {
//     Name = "Father"
//     SureName = "Mother"
//     Work (){
//         console.log("I am your PArent's");
//     }

// }

// class child1 extends parent {
//     Name = "Monu"
//     age = 4

//     Relation (){
//         console.log("I am your Frist child")
//     }
// }

// class child2 extends parent {
//     Name = "Sahil"
//     age = 49

//     Relation (){
//         console.log("I am your Second child")
//     }
// }

// let P = new parent()
// let C1 = new child1()
// let C2 = new child2()

// C2.Relation();


//   // Example 2 

// class Animal {
//     eyes = 2;
//     legs = 4;

//     speak()
//     {
//         console.log("I Speak");
//     }
// }

// class Dog extends Animal{
//     colou = "Black"
//     speak()
//     {
//         console.log("I Bark")
//     }
// }

// class Cat extends Animal 
// {
//     color = "White"
//     speak()
//     {
//         console.log("Cat Speak")
//     }

// } 

// let dog = new Dog();
// let cat = new Cat();

// dog.speak();
// cat.speak();



// 10. ************************ Duck typing **************************
// ek class ka object dusari class k object k function ko de diya 

// class car{
//     start (){
//         console.log("Car is started")
//     }
// }

// class Bike{
//     start (){
//         console.log("Bike is started")
//     }
// }

// class X {
//     run (a){
//         a.start();
//     }
// }

// let car1 = new car();
// let bike1 = new Bike();

// let x1 = new X();
// x1.run(car1);
// x1.run(bike1);



// 11. ************************ Functional inheritance (Constructor function)**************************
// ek function duasre function k data ko use ya extends  kar rha hai bhale hi return karke kar rha ho 

// function person(BasicInfo){
//      let obj = {};
//      obj.Name = BasicInfo.Name;
//      obj.Age = BasicInfo.Age;
//      obj.Number = 1234567890;
//      return obj;
// }

// function Employee (BasicInfo, EmployeeInfo){
//     let obj1 = person(BasicInfo);                 // ? obj1  person function ka data le rha hai mean extends kar rha hai 
//     obj1.Salary = EmployeeInfo.Salary;
//     obj1.Id = 1765;
//     console.log(obj1)
// }

// Employee(
//     {Name:"Shubham", Age: 29},
//     {Salary:900000}
//     );



// 11. ****************** hoisting ************************* 
// hoistine mai variable  jha banaye bha nai bnate ban vo pahle jata hai unme undefined rkha jata hai , jha banate hai bha unki only value (data) assign hoti hai.
// let and var dead zone m rhte hai isliye error ati hai or var open khula rhta hai isliye vo undefined show krta hai .. halaki hote 3 undifiend hi hai 


// funtion mai var or let ka scope jha bante hai bahi use kr kste hai (function mai var or let  k scope ko lekar same bat hai dono ka data functions se bahar use nai kiya ja skte hai)
// loop mai var ka scope globle hota hai but let ka blocked hai hota hai.
