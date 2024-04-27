// // // // // function Sayname() {
// // // // //   console.log("hi");
// // // // // }
// // // // // Sayname();
// // // // function add(number1, number2) {
// // // //   console.log(number1 + number2);
// // // // }
// // // // add(3, 4);

// // // // function loginUser(username) {
// // // //   if (username == undefined) {
// // // //     console.log("please enter a username");
// // // //     return;
// // // //   }
// // // //   return `${username} just logged in`;
// // // // }
// // // // console.log(loginUser("himalay"));
// // // // console.log(loginUser());

// // // // //rest and spread operator
// // // // //converts it into array

// // // // function calculateCart(val1, val2, ...num1) {
// // // //   return num1;
// // // //   //val1 and val2 will be used as values and rest others will be used via converting in array
// // // //   //rest operator is used
// // // // }
// // // // console.log(calculateCart(200, 400, 600));

// // // const user = {
// // //     username : "himalay",
// // //     price: "999"
// // // }

// // // function handelObject(anyobject){
// // //     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
// // // }
// // // handelObject(user)

// // // //other wey to pass objects in functions
// // // handelObject({
// // //     username: "him",
// // //     price:"699"
// // // })

// // const myNewArray = [200, 400, 600];
// // function returnValue(getArray) {
// //   return getArray[1];
// // }
// // returnValue(myNewArray);

// //nested scopes
// function one() {
//   const user = "himalay";

//   function two() {
//     const website = "youtube";
//     console.log(user);
//   }
//  // console.log(website); // couldnt be executed as its part of a child scope

//   two();
// }
// one();

//nested conditionals
