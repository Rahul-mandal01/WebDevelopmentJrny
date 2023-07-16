// console.log("Rahul Here");

// function sync(){
//     console.log('first');
// }

// sync();

// console.log('second');

// setTimeout(function(){
//     console.log('third');
// },5000)

// function sync(){
//         console.log('first');
//     }
    
// sync();
    
// console.log('second');

// let meraPromise1 = new Promise(function(resolve, reject){
//     // console.log('I am inside promise');
    // resolve(1998);  //pass any value

//     setTimeout(function(){
//         console.log('I am inside promise1');
//     }, 5000);
//     // resolve(1234562458);
//     reject(new Error('BhaiSahab Error aaye h')); 
// });

// meraPromise1.then((value) => { console.log(value)}, (error) => {console.log("Received an Error")});
//  // meraPromise1.catch((error) => {console.log("Received an Error")});

// console.log('pehla');


// let meraPromise2 = new Promise(function(resolve, reject){
//     // console.log('I am inside promise');
//     // resolve(1998);  //pass any value

//     setTimeout(function(){
//         console.log('I am inside promise2');
//     }, 3000);
//     // resolve(2458);
//     // reject(new Error('BhaiSahab Error aaye h')); 
// });

// console.log('pehla');



// let waadaa1 = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('setTimeout1 started');
//     }, 2000);
//     resolve(true);
// })


// let output= waadaa1.then(() => {
//     let waadaa2 = new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             console.log('setTimeout2 started');
//         }, 3000);
//         resolve("waadaa2 resolved");
//     })
//     return waadaa2;
// })

// output .then((value) => console.log(value));

// async function abcd(){
//     return 7;
// }

// console.log(abcd());


// async function utility(){

// // let kolkataMausam = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("kolkata is cool");
// //     }, 5000);
// // });

// // let delhiMausam = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         resolve("delhi me bahut garmi hai ");
// //     }, 7000);
// // });

// // let dM = await delhiMausam;
// // let kM = await kolkataMausam;

// return [dM , kM];

// }

// for get call, fetch API

// let content = fetch('https://jsonplaceholder.typicode.com/posts/1');     // JSONPlaceholder fake RESTapi

// let obj = {
//     heading: "head"
// };

// async function utility(){
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     console.log(output);
// }

// utility();


// For Post Call


// async function helper(){

//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Rahul',
//             body: 'Tagdi body',
//             userId: 2001,
//             weight: 59,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     };

//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }

// async function utility(){
//     let ans = await helper();
//     console.log(ans);
// }

// utility();




// let name = "sher";
// function init() {
//     // let is a block scoped 
//     let name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//         let name = 'rahul';
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init();

//   let func1 = init();

//   func1();
  
