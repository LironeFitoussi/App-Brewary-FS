
const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let gameHasStarted = false;
let level = 0

$(document).keypress(function () {
  if (!gameHasStarted) {
    console.log('click');
    $("#level-title").text(`Level ${level}`)
    nextSequence()
    gameHasStarted = true
  }
}); 

$(".btn").click(function () {
  if (gameHasStarted) {
    let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    animatePress(userChosenColour)
  
    checkAnswer(userClickedPattern.length-1)
  }
});

function checkAnswer (currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("Success");

    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(() => {
        nextSequence()
      }, 1000);
    } 
    } else {
      console.log("Wrong");
      let audio = new Audio("./sounds/wrong.mp3");
      audio.play();
      $("body").addClass("game-over")
      setTimeout(function () {
        $("body").removeClass("game-over")
      }, 200)
      $("#level-title").text(`Game Over, Press Any Key to Restart`)
      startOver()
  }
}

function nextSequence() {

  userClickedPattern = [];

  level++
  $("#level-title").text(`Level ${level}`)

  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);
  
}

const playSound = (name) => {
  let audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

const animatePress = (currentColour) => {
  $(`#${currentColour}`).addClass("pressed")
  setTimeout(function() {
    $(`#${currentColour}`).removeClass("pressed")
  },100)
}

const startOver = () => {
  gamePattern = [];
  level = 0;
  gameHasStarted = false;
}
