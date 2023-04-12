// console.log('hello jee');

// Hoisting Process
// run();


// Function Declaration
// function run(){
//     console.log('Running');
// }


// Function call or Invoke
// run();

// Uncaught ReferenceError: Cannot access 'stand' before initialization
// stand();


//Named function assignment
// let stand = function walk(){
//     console.log('walking');
// };


//Anonymous function assignment
// let stand2 = function(){
//     console.log('walking');
// };

// stand();
// stand2();

// coming error---->Uncaught ReferenceError: walk is not defined
// walk();

// let jump = stand;
// jump();

// let x=1;
// x='a';

// console.log(x);

// function sum(a,b){
//     return a+b;
// }


// function sum(a,b){
//     let total=0;
//     for(let value of arguments)
//         total=total+value;
//     console.log(arguments);
//     return total;
// }

// console.log(sum(2,5));

// output NaN
// console.log(sum(2));
// console.log(sum());

// Output -> 3
// console.log(sum(1,2,3,4,5));

// let ans = sum(1,2,3,4,5);
// console.log(ans);

// function sum(nums,value,...args){
//     console.log(args);
// }

// sum(1,2,34,5,6,5);

// Default parameters
// function interest(p,r=9,y=10){
//     return p*r*y/100;
// }

// console.log(interest(1000,10,5));

// Output --> NaN
// console.log(interest(10,5));
// console.log(interest(1000,5));
// console.log(interest(1000,10));


// GETTER_SETTER CONCEPTS
// GETTER--ACCESS PROPERTIES
// SETTER--CHANGE OR MUTATE PROPERTIES
// let person={
//     fName:'Rahul',
//     lName:'love',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if( typeof value !== String ){
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     }
// };



// console.log(person);

// function fullName(){
//     return `${person.fName} ${person.lName}`;
// }
// ISSUE --> Read Only

// person.fullName='Rahul Kumar'; 
// try{
//     // person.fullName=8;
//     person.fullName=true;
// }
// catch(e){
//     alert(e);
// }
// console.log(person.fullName);




// SCOPE
// {
//     var a=5;
// }

// console.log(a);

// function walk(){
//     var a=5;
// }

// console.log(a);

// coming error:--Uncaught ReferenceError: i is not defined
// for(let i=0; i<10; i++){

// }
// console.log(i);


// for(var i=0; i<10; i++){

// }
// console.log(i);

// Showing error
// if(true){
//     let a=5;
// }

// console.log(a);


// if(true){
//     var a=5;
// }

// console.log(a);

// function a(){
//     const ab=5;
// }

// const ab=5;
// function b(){
//     const ab=5;
// }

// sorting
// let a=[10,5,4,25];

// a.sort(function(a,b){
//     return a-b;
// });

// console.log(a);

// let arr=[1,2,3,4];
// let total=0;

// for(let value of arr)
//     total=total+value;

// console.log(total);

// let totalSum= arr.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
// console.log("PRINTING TOTAL SUM:")
// console.log(totalSum);


