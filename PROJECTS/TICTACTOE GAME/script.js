const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


// creating a function to initialise the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    // UI pr empty bhi krna padega boxes ko
    boxes.forEach((box,index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = " all";
        // one more thing is missing
    } )
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer = "0";
    }
    else{
        currentPlayer="X";
    }

    // UI update

    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}


function checkGameOver(){
    let answer = "";


    winningPosition.forEach((position) => {
        if()
    })

}

function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = currentPlayer;     //change in UI
        gameGrid[index] = currentPlayer;        //showing inner logic
        boxes[index].style.pointerEvents = "none";
        
        // swap karo turn ko
        swapTurn();
        // check kro ki koi jeet to nhi gya
        checkGameOver();
    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleClick(index);                 //to know which index is being clicked
    });
});


newGameBtn.addEventListener("click", initGame);






