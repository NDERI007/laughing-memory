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
    console.log("form submitted");
    //prevent page refresh
    e.preventDefault();
    console.log("FormData:", Array.from(new FormData(e.target)));

    //initialize user form data
    const formData = new FormData (e.target);
    const data = Object.fromEntries(formData);
    document.querySelector(".modal-wrapper").setAttribute("hidden", true);
    console.log(data);

})