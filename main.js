// firstly attach an event listener to our form to get user input

//attach event(click) listeners to the gameboard

// second we initialize the game

// next we check which gamemode we're playing

// we need to set win conditions

//we need to determine current player

//after each move check win conditions if not  met, set other player as active

//human vs human first, easy AI then hard Ai

const winningCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    //prevent page refresh
    e.preventDefault();

    //initialize user form data
    const formData = new FormData (e.target);
    const data = Object.fromEntries(formData);
    document.querySelector(".modal-wrapper").setAttribute("hidden", true);
    StartGame(data);
});

const initializeVar = (data) => {
    data.choice = +data.choice;
    data.board = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    data.player1 = "X";
    data.player2 = "O";
    data.round = 0;
    data.currentPlayer = "X";
    data.gameover = false;
}

const EventForGameBoard = (data) => {
    document.querySelectorAll(".box").forEach(box => {
        box.addEventListener("click",(Event) => {
            playMove(Event.target,data);
        })
    })
}
const StartGame = (data) => {
    //initialize game variable
    //add event listners to the game
    adjustDom('display-turn', `${data.playerName}'s turn`);
    initializeVar(data);
    EventForGameBoard(data);
    
    
}
const playMove = (box, data) => {
    //is game over if true then do nothing
    if (data.gameover || data.round > 8) {
        return
    }
    //Check if game box has a letter in it, if so do not do anything
    if (data.board[box.id] === "X" || data.board[box.id] === "O") {
        return
    }
    //adjust the DOM for player move, and then check win conditions

    data.board[box.id] = data.currentPlayer;
    box.textContent = data.currentPlayer;
    box.classList.add(data.currentPlayer === "X" ? "player1" : "player2");
    //increase round no #
    data.round++
    //check end condtions
    if (endCondition(data)) {
        // adjust DOM to reflect endConditions
        return
    }
    //change current player
    //change the dom and current player
    if (data.choice === 0) {
        changePlayer(data);
    } else if (data.choice === 1) {
        //easy ai
        //change back to player one
        easyAi(data);
        data.currentPlayer = "X";
    }
};

const endCondition = (data) => {
    // 3 potential options
    //winner
    //tie
    //game not over yet
    if (checkWinner(data)) {
        //adjust DOM here to reflect win
        let winnerName = data.currentPlayer === "X" ? data.playerName : data.playername;
        adjustDom('display-turn', winnerName + " has won the game")
        return true
    } else if (data.round === 9) {
        // adjust DOM here to reflect win
        adjustDom('display-turn'," it's a tie")
        data.gameover = true;
        return true
    }
    return false
};

const checkWinner = (data) => {
    let result = false;
    winningCond.forEach(condition => {
        if (data.board[condition[0]] === data.board[condition[1]] && 
            data.board[condition[1]] === data.board[condition[2]]
        ) {
            data.gameover = true;
            result = true;
        }
    });
    return result
};

const adjustDom = (className, textContent) => {
    const elem= document.querySelector(`.${className}`);
    elem.textContent = textContent;
}

const changePlayer =(data) => {
    data.currentPlayer = data.currentPlayer === "X" ? "O" : "X";
    //adjust the dom
    let dispTurntext = data.currentPlayer === "X" ? data.playerName : data.playername;
    adjustDom('display-turn', `${dispTurntext}'s turn`);
}

const easyAi = (data) => {
    changePlayer(data);
    let availableSpace = data.board.filter((space) => space !== "X" && space !== "O");
    let move = availableSpace[Math.floor(Math.random() * availableSpace.length)]; //Get a random item from a javascript array
    data.board[move] = data.player2;
    let box = document.getElementById(`${move}`);
    box.textContent = data.player2;
    box.classList.add("playername");
    endCondition(data);
    changePlayer(data);
};