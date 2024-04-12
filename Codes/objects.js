// // //objects in javascript
// // //singleton 
// // // object literals 
// // //object.create -- object creation method
// const jsUser = {
//     name: "Himalay",
//     age: 25,
//     location: "jaipur",
//     isloggedIN:false,
//     lastLogin: ["monday","friday"]
//     //keys and values
// }

// // console.log(jsUser.lastLogin);
// // //other method
// // console.log(jsUser["isloggedIN"]); 
// // //in objects keys are automatically considered as strings
// // //symbols

// // const mySym = Symbol("key1") 
// // const jsUser1 = {
// //     name: "Himalay",
// //     age: 25,
// //     location: "jaipur",
// //     isloggedIN:false,
// //     lastLogin: ["monday","friday"],
// //     //keys and values

// //     //using symbols inn objects
// //     [mySym]: "mykey1"
// // }
// // // console.log(typeof(mySym));
// // //freeze -- allows no more propagation in value
// // // Object.freeze(jsUser) -- syntax for freezing
// // // addition of function in objects.
// // jsUser.greetings = function(){
// //     console.log("hello");
// // }
// //  console.log(jsUser.greetings()); // error not a function 

// //  jsUser.greetingstwo = function(){
// //     console.log(`hello js user, ${this.name}`);
// //  }
// //  console.log(jsUser.greetingstwo());


// // const user = new Object() -- singleton obj
// const user = {} //-- non singleton
// // same batt different declaration.
// user.id = "123abc"
// user.name = "himalay"
// //objects ke andar object passing
// const user2 = {
//     email:"abc@gmail.com",
//     fullName:{
//         firstName:"himalay",
//         lastName:"gupta"
//     }
// }
// console.log(user2.fullName.firstName);

// // merging two objects
// // objects.assign(target,source)
// // best method using spread method

// // jab database se values ayenge phir 
// console.log(jsUser);
// console.log(Object.keys(jsUser)); //via looping
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));
// console.log(jsUser.hasOwnProperty('age'));

