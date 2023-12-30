

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomSource = "images/dice" + randomNumber1 + ".png";

var selectSource = document.querySelectorAll("img")[0];

selectSource.setAttribute("src", randomSource);


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

var randomSource2 = "images/dice" + randomNumber2 + ".png";

var selectSource2 = document.querySelectorAll("img")[1];
selectSource2.setAttribute("src", randomSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 won the game";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 won the game";
}
else {
    document.querySelector("h1").innerHTML = "Draw!"
}
