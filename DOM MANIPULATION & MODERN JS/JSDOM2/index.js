
// ----ADD EVENT LISTENER-----

// document.addEventListener('click',function(){
//     console.log('I have clicked on the document');
// })


// Alternatively 
function eventFunction(){
    console.log('I have clicked on the document');
}

document.addEventListener('click',eventFunction);

// ---------REMOVE EVENT LISTENER-------
// document.removeEventListener('click',eventFunction);