// Control flow

// let a = 10;
// let b = 20;
// if (b > a) {
  // console.log("a is smaller");
//}

// operators
// <,>,<=,>=,==
// === also checks for the type .. also know as strict equals to;
// const balance =1000;
// if(balance>500) console.log("yeah yeah yeah");  //implicit scope



//Loops
// for(let i=0;i<5;i++){
//   console.log("loop started");
// }

// let j=1;
// while(j<5){
//   console.log("2nd loop done");
//   j++;
// }
// let k=1;
// do{
//   console.log("3rd loop");
//   k++;
// }while(k<5)


//Switch cases
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "jan"

// switch (month) {
//     case "jan":
//         console.log("January");
//         break;
//     case "feb":
//         console.log("feb");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "april":
//         console.log("april");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


// taking userInput in console
// let userInput = prompt("Please enter your name:");

///truthy and falsy

//falsy values - false,0,-0,BigInt 0n,""(empty string),NaN,undefined,NULL
//except above all are truthy


//empty objects detection 
// const emptyobj = {}
// if(Object.keys(emptyobj).length===0){
//   console.log("empty object");
// }

//empty array
// const email = []
// if(email.length===0){
//   console.log("empty array");
// }

const arr = [1, 2, 3, 4, 5]

for (const him of arr) {
    //console.log(him);
}
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

const myObject = {
  js: 'javascript',
  cpp: 'C++',
  rb: "ruby",
  swift: "swift by apple"
}

for (const key in myObject) {
  //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
  //console.log(programming[key]);
}

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);