
// ----ADD EVENT LISTENER-----

// document.addEventListener('click',function(){
//     console.log('I have clicked on the document');
// })


// Alternatively 
// function eventFunction(){
//     console.log('I have clicked on the document');
// }

// document.addEventListener('click',eventFunction);

// ---------REMOVE EVENT LISTENER-------
// document.removeEventListener('click',eventFunction);

// const content = document.querySelector('#wrapper');
// content.addEventListener('click', function(event){
//     console.log(event);
// });

// let links= document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click', function(eventOrRahul){
//     eventOrRahul.preventDefault();
//     console.log("Mazza Aaya");
// });

// let myDiv = document.createElement('div');

// for(let i=1; i<=50; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para '+ i;

//     newElement.addEventListener('click', function(event){
//         console.log('I have clicked on para '+  i);
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// AVOID TOO MANY EVENTS

// let myDiv = document.createElement('div');

// function paraStatus(event){
//     console.log(event.target.textContent);
// }

// myDiv.addEventListener('click', paraStatus);

// for(let i=1; i<=50; i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is Para '+ i;
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let element = document.querySelector('#wrapper'); 
// element.addEventListener('click', function(event){
//     if(event.target.nodeName === 'SPAN'){
//     console.log('Clicked on span '+ event.target.textContent);
//     }
// });