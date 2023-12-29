
const buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = [];

let userClickedPattern = [];

$(".btn").click(function () {
  let userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour)
});

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $(`#${randomChosenColour}`).fadeIn(100).fadeOut(100);

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