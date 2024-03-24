const countValue = document.querySelector('#counter');


// const increment= () =>{
//     // get the value from UI
//     let value = parseInt(countValue.innerText);  //parseInt ---> method is used to convert a string into an Integer number.
//     // uodate the value
//     value = value+1;
//     // set the value onto UI
//     countValue.innerText=value;
// };



// const decrement= () => {
//         // get the value from UI
//         let value = parseInt(countValue.innerText); //innerText---> The innerText property is used to get or set the text content of an element and its descendants. 
//         // uodate the value
//         value = value-1;
//         // set the value onto UI
//         countValue.innerText=value;

// };






// -----------------Alternative--------------------


function increment(){
    // get the value from UI
    let value = parseInt(countValue.innerText);  //parseInt ---> method is used to convert a string into an Integer number.
    // uodate the value
    value = value+1;
    // set the value onto UI
    countValue.innerText=value;
};


function decrement(){
    // get the value from UI
    let value = parseInt(countValue.innerText);  //parseInt ---> method is used to convert a string into an Integer number.
    // uodate the value
    value = value+1;
    // set the value onto UI
    countValue.innerText=value;
};