// //arrays
// const myArr = [0,1,2,3,4,5];
// console.log(myArr[0]);

// //array can have different data types
// // array's are object and have different properties

// //array method's
// //push
// myArr.push(10);
// console.log(myArr);
// //pop removes last eliment

// //unshift -- adds element at first index
// myArr.unshift(9);
// console.log(myArr);

// //shift -- adds element at last index
// myArr.shift();
// console.log(myArr);

// //questionaier methods
// console.log(myArr.includes(8));
// console.log(myArr.indexOf(3));

// //.join method
// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(myArr));
// console.log(typeof(newArr));


// //slice and splice
// console.log(myArr);
// const newm1 = myArr.slice(1,4);
// console.log(newm1);
// const newm2 = myArr.splice(1,4);
// console.log(newm2);
// console.log(myArr);

const arr = ["himalay","harsh","naveen","nitish","gyani","taukif"];
const arr2 = ["spiderman","superman","batman"];
arr.push(arr2);
// console.log(arr);
const n = arr.concat(arr2);
console.log(n);

//spread operator
//[...]
const spread = [...arr,...arr2];
console.log(spread);

console.log(Array.from("himalay"));
console.log(Array.from({name:"himalay"})); //here name is key
