const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

// Decide the current turn
let currentPlayer;
let gameGrid;

// All possible conditions for winning
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
        
        // initialise box with css properties again
        box.classList = `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer.toUpperCase()}`;
}


initGame();


// switch player turn on click
function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer = "0";
    }
    else{
        currentPlayer="X";
    }

    // UI update

    gameInfo.innerText = `Current Player - ${currentPlayer.toUpperCase()}`;
}



// check if game is over
function checkGameOver() {
    let answer = "";

    winningPosition.forEach((position) => {
        // ALL 3 BOXES SHOULD BE NON-EMPTY AND EXACTLY SAME IN VALUE

        if (
            (gameGrid[position[0]] !== "" ||
              gameGrid[position[1]] !== "" ||
              gameGrid[position[2]] !== "") &&
            gameGrid[position[0]] === gameGrid[position[1]] &&
            gameGrid[position[0]] === gameGrid[position[2]]
          ){
                // check if winner is x
                if(gameGrid[position[0]] === "X")
                    answer= "X";
                else
                    answer="0";

                // disable pointer events
                boxes.forEach((box) =>{
                    box.style.pointerEvents = "none";
                });

                // now we know X/0 is winner
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
        }
        
    });

    // it means we have a winner
    if(answer !==""){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;
    }

    // let's check whether there is tied
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "")
            fillCount++;
    });

    // board is filled, game is tied
    if(fillCount === 9){
        gameInfo.innerText = "Game Tied!";
        newGameBtn.classList.add("active");
    }

}


// Event Listener
function handleClick(index){
    // make sure only empty cells are filled
    if(gameGrid[index] === ""){
        boxes[index].innerHTML = currentPlayer.toUpperCase();     //change in UI
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






