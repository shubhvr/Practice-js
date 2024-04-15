// 1. 7 = Map (Array)
// 2. 16 = Filter (Array)
// 3. 42 = Reduce (Array)


// ************* Basic Array Methods ***********
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()
// *********** See Also:  ************
// Search Methods
// Sort Methods
// ********** Iteration Methods ********** 	
// Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()


// 1.  ******************* Map (Array)   ****************
// let arr = [1,2,3,4,5,6,7]

// arr.map((e,i) => {
//   console.log(e,i)
// })


// 2.  ******************* Filter (Array)   ****************
// Notes 
// The indexOf() method returns the position of the first occurrence of a value in a string.

// The indexOf() method returns -1 if the value is not found.

// The indexOf() method is case sensitive.



// let arr = [1,2,3,4,5,6,7]

// let x = arr.filter((e) => {
//   return e % 2 == 0;
// })
// console.log(x)


//   ********************** Find unique ***************************
// let roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
// let uniqueRoadmaps = roadmaps.filter(
//   (x, y) => roadmaps.indexOf(x) === y
//   );
//   console.log(uniqueRoadmaps); 


//  3.         ***** ******************* Reduce (Array)   ****************************
// reduce(callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: string[]) => string, initialValue: string): string (+2 overloads)

//1. a  = 1 and b = 2  sum = 3
//2. a = 3 and b = 3   sum = 6 
//3. a = 6 and b = 4 sum = 10
// 4. a = 10 and b = 5  sum = 15 


// let arr = [1,2,3,4,5]

// let x = arr.reduce((a,b) => {
//   return a + b;
// })
// console.log(x)


// const roadmaps = ['JavaScript', 'React', 'Node.js', 'Node.js', 'JavaScript'];
// const uniqueRoadmaps = roadmaps.reduce((unique, roadmap) => {
//   return unique.includes(roadmap) ? unique : [...unique, roadmap];
// }, []);
// console.log(uniqueRoadmaps); 


//                           ********************  Methods  *************************
// let arr = ['Raju', 'syam', 7, 9, 'Manohar']


// // push   Adding on last index                 
// arr.push(10);
// console.log(arr);


// // pop   Removing on last index
// arr.pop()
// console.log(arr)


// // shift  Removing on Frist index
// arr.shift() 
// console.log(arr)


// // unshift  Adding on Frist index
// arr.unshift(1)
// console.log(arr)


// // slice  kisi particular index number ya range is index se is index tak ka data fatch krne k liye use krte hai 
// // slice(start parameter, end parameter)    end se satrt kare to -1 ayega(0, -1)  end se ek kam print hoga 
// console.log(arr.slice(0))


// splice  method will change the contents of the original array. 
// splice(start, optional delete count, optional items to add)
// arr.splice(1, 0, "Shubham")
// console.log(arr)

