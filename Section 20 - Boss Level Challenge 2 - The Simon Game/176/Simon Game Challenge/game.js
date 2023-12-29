
const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

let gameHasStarted = false;

let level = 0
$(document).keypress(function () {
  if (!gameHasStarted) {
    $("#level-title").text(`Level ${level}`)
    nextSequence()
    gameHasStarted = true
    
  }
}); 

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour)

  checkAnswer()
});

function nextSequence() {
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
  },
  100)
}

function checkAnswer (currentLevel) {

}