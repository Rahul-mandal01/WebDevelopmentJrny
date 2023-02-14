console.log('Chaliye Shuru krte h');

//object create

// let rectangle={
//     length:1,
//     breadth:2,

//     draw(){
//         console.log('drawing rectangle');
//     }
// };

// //FACTORY FUNCTION

// function createRectangle(){
//     return rectangle={
//         length:1,
//         breadth:2,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }



function createRectangle(len, bre){
    return rectangle={
        length: len,
        breadth: bre,

        draw(){
            console.log('drawing rectangle');
        }
    
        // draw: function(){
        //     console.log('drawing rectangle');
        // }
    };
}


let rectangleObj1 = createRectangle();


// let rectangleObj1= createRectangle(5,4);
// rectangle.length;


// Camelcase-> noOfStudents
// Constructor Function -> pascal notaion -> First letter of every letter should be capital  -> NoOfStudents
// constructor function -> prop/methods  -> initialise/define
function Rectangle(len, bre){
    this.length= len;
    this.breadth= bre;
    this.draw= function(){
        console.log('drawing');
    }
}

// object creation using constructor function
// let rectangleObject = new Rectangle(4,6);

rectangleObject= new Rectangle(4,6);
rectangleObject.color  = 'yellow';

delete rectangleObject.color;
console.log(rectangleObject);

let Rectangle1 = new Function{
    
// }

// rectangle.draw();


// let a={value:10};


