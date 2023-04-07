// console.log('Lets get started');

// object creation
// let rectangle={
//     length:1,
//     breadth:2,


//     draw: function(){
//         console.log('drawing rectangle');
//     }
// };

// function createRectangle(){
//     let rectangle={
//         length:1,
//         breadth:2,
    
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
//     return rectangle;
// }

// ----------OR--------------

// function createRectangle(){
//     return rectangle={
//         length:1,
//         breadth:2,
    
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }

// Factory Function
// function createRectangle(length,breadth){
//    return rectangle={
//         length,
//         breadth,

//         draw(){
//             console.log('drawing Rectangle');
//         }
//    };
// }

// function createRectangle(len,bre){
//     return rectangle={
//          length:len,
//          breadth:bre,
 
//          draw(){
//              console.log('drawing rectangle');
//          }
//     };
//  }

// let rectangleObj1=createRectangle(50,4);
// let rectangleObj2=createRectangle(505,4);
// let rectangleObj3=createRectangle(501,4);

// camelCase --> numberOfStudents
// constructor Function --> Pascal Notation --> first letter of every word is capital  --> NumberOfStudents
// constructor Function --> properties/methods --> initialise/define
// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }

// object creation using constructor function
// let rectangleObject = new Rectangle();


// --------------OR------------------------

// function Rectangle(len, bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drawing');
//     }
// }

// object creation using constructor function
// let rectangleObject = new Rectangle(5,6);
// rectangleObject.color='RED';
// console.log(rectangleObject);

// delete rectangleObject.color;


// Primitve types example
// let a=10;
// let b=a;

// a++;

// console.log(a);
// console.log(b);

// Reference types example
// let a={value:10};
// let b=a;
// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a=10;
// // inc--> increment
// function inc(a){
//     a++;

// }
// inc(a);
// console.log(a);



// let a={value:10};

// function inc(a){
//     a.value++;
// }

// inc(a);
// console.log(a.value);


// let rectangle ={
//     length:2,
//     breadth:4,
// };

// // for-in loop
// for(let key in rectangle){
//     // keys are reflected through key variable
//     // values are reflected through rectangle [key]
//     console.log(key,rectangle[key]);
// }


// // for-of Loop
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

// print with values
// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }

// if('length' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

// object_clone #1 using iterate
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={};

// for(let key in src){
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// console.log(dest);

//object cloning #2 using Assign
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let src2={value:26};
// let dest = Object.assign({},src,src2);
// console.log(dest);
// src.a++;
// console.log(dest);


// object cloning #3 using spread
// let src={
//     a:10,
//     b:20,
//     c:30
// };

// let dest={...src};
// console.log(dest);
// src.a++;

// console.log(dest)




