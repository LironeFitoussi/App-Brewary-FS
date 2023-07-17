// Angela
// Jack
// Pam
// James
// Lara
// Jason

var guestName = prompt("What is You're name?")

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

if (guestList.includes(guestName)) {
    alert("Welcome!");    
} else {
    alert("Sorry, you are not invited...")
}