const gamewrapper = document.querySelector(".game-wrapper");
gamewrapper.classList.add(..."flex justify-center w-full".split(" "));

const Gameboard = document.querySelector(".gameboard");
Gameboard.classList.add(... "grid grid-cols-3 gap-4 w-1/4 min-h-1/4".split(" "));

const Box = document.querySelector(".box");
Box.classList.add(..."w-auto h-auto min-h-50px min-w-50px rounded-2xl flex align-center justify-center pl-22px transistion-all duration-700 ease-in-out cursor-pointer text(length:4vw, 3rem)".split(" "))
