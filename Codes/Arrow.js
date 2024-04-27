// // // const user = {
// // //   username: "Himalay",
// // //   price: 999,

// // //   welcomeMessage: function () {
// // //     console.log(`${this.username}, welcome to website`);
// // //     console.log(this);
// // //   },
// // // };
// // // // user.welcomeMessage();
// // // // user.username = "sam";
// // // // user.welcomeMessage();

// // // user.welcomeMessage();

// // // //this keyword is used for current context
// // // //arrow func me this keyword nahi hota hai
// // // //browser ke andar global object window hota hai

// // function chai() {
// //   let username = "hitesh";
// //   console.log(this.username); //this functions ke andar use nahi hota hai.
// // }
// // chai();
// //arrow func
// const chai = () => {
//   let username = "hitesh";
//   console.log(this);
// };
// chai();

const numAdd = (num1, num2) => {
  return num1 + num2;
};
console.log(numAdd(3, 4));

//implicit return
const numAddtwo = (num1, num2) => num1 + num2;

//IIFE -- immediately invoked funcn expression (function declaration)()
// eg-- (function chai() {
//    let username = "hitesh";
//    console.log(this.username);
//});
// (() => {
//   console.log("hii");
// })();
// ((name) => {
//   console.log(`hii,${name}`);
// })("himalay");

//name iife ke liye function ka nam dal dena hai bass
