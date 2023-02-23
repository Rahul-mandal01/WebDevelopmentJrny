console.log('Chaliye shuru krte hai ');

// object create

let rectangle={
    length:1,
    breadth:2,

    draw: function(){
        console.log('drawing Rectangle');
    }
};

// FACTORY FUNCTION

// function createRectangle(len, bre){
//     // let rectangle={
//     //     length:1,
//     //     breadth:2,
    
//     //     draw: function(){
//     //         console.log('drawing Rectangle');
//     //     }
//     // };
//     // return rectangle;

//     // EITHER ABOVE AND DOWN BOTH THE CODE HAVE SAME MEANING

//     return rectangle={
//         // length:1,
//         // breadth:2,

//         length: len,
//         breadth: bre,
    
//         draw: function(){
//             console.log('drawing Rectangle');
//         }
//     };

// }
// let rectangleObj1= createRectangle(5,4);
// let rectangle2= createRectangle(9,4);
// let rectangle3= createRectangle(5,8);


// Camelcase :> numberOfStudents
// constructor function :- PASCAL NOTATION  -> first letter of every word is captial -> NumberOfStudents
function Rectangle(len, bre){

    this.length = len;
    this.breadth = bre;
    this.draw= function(){
        console.log('drawing');
    }

    // this.length = 1;
    // this.breadth = 2;
    // this.draw= function(){
    //     console.log('drawing');
    // }
}

// object create using constructor function
let rectangleObject = new Rectangle(6,5);

rectangleObject.color='Yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);