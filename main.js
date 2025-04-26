// firstly attach an event listener to our form to get user input

//attach event(click) listeners to the gameboard

// second we initialize the game

// next we check which gamemode we're playing

// we need to set win conditions

//we need to determine current player

//after each move check win conditions if not  met, set other player as active

//human vs human first, easy AI then hard Ai
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
            playMove(Event.target,data)
        })
    })
}
const StartGame = (data) => {
    //initialize game variable
    //add event listners to the game
    EventForGameBoard(data);
    initializeVar(data);
}
const playMove = (box, data) => {
    console.log(box, data);
}