// console.log('Lets get started');

// obhject creation
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
// onstructor Function --> properties/methods --> initialise/define
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

function Rectangle(len, bre){
    this.length=len;
    this.breadth=bre;
    this.draw=function(){
        console.log('drawing');
    }
}

// object creation using constructor function
let rectangleObject = new Rectangle(5,6);
rectangleObject.color='RED';
console.log(rectangleObject);

delete rectangleObject.color;


