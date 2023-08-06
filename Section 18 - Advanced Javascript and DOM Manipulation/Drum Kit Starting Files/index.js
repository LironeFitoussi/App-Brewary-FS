
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelector(".drum")[i].addEventListener("click", function() {alert("I got clicked ");});
}

document.addEventListener("keypress", function() {
    alert("Key was pressed!");
});