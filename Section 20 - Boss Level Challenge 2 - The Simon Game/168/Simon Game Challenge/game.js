// alert("hello")
const buttonColours = ["red", "blue", "green", "yellow"]
let gamePattern = []

const nextSequence = () => {
    const randomNumber = Math.floor(Math.random() * 4)
    let randomChosenColour = buttonColours[randomNumber]
    gamePattern.push(randomChosenColour)
    console.log(randomChosenColour);
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100); 
    let audio = new Audio(`./sounds/${randomChosenColour}.mp3`);
    audio.play();
}

