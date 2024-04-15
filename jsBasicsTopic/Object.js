// 1. 7 = this (in object// this reffer to current object)
// 2. 35 = Object by function constructor (New way to create Ojbect)




// 1.     ************************ this (in object// this reffer to current object) ******************

// let a = {
//   Name : "shubham",
//   Age : 27,
//   GetData :(p)=>
//   {
//     console.log(p.Name)
//     console.log(p.Age)
//     console.log("--------")
//   }
// };

// let b = {
//   Name : "Ravindra",
//   Age : 30,
//   GetData : function()
//   {
//     console.log(this.Name)
//     console.log(this.Age)
//   }
// }

// a.GetData(a);
// b.GetData();



// 2.    *************** Object by function constructor (New way to create Ojbect) ***************


// function shubh(name, age) {
//   this.name = name;
//   this.age = age;
//   this.GetData = () => {
//     console.log(this.name)
//     console.log(this.age)
//     console.log("-----------")
//   }
// }

// let p1 = new shubh("Ayush", 29);
// let p2 = new shubh("Pyush", 30);

// p1.GetData();
// p2.GetData();







