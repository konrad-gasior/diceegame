var startButton = document.querySelector("#start");

startButton.addEventListener("click", () => {
    startButton.classList.add("pressed");
    setTimeout(() => {startButton.classList.remove("pressed");} , 100);

    var randomNumber1  = Math.floor(Math.random() * 6) + 1;
    var randomNumber2  = Math.floor(Math.random() * 6) + 1;
    
    var imageOneLocation = "images/dice" + randomNumber1 + ".png";
    var imageTwoLocation = "images/dice" + randomNumber2 + ".png";
    
    document.querySelector(".img1").setAttribute("src", imageOneLocation);
    document.querySelector(".img2").setAttribute("src", imageTwoLocation);
    
    if(randomNumber1 === randomNumber2)
        document.querySelector("h1").textContent="🥋Draw!";
    else if(randomNumber1 > randomNumber2)
        document.querySelector("h1").textContent="👑Player 1  Wins!";
    else
        document.querySelector("h1").textContent="Player 2  Wins!✨";
});

