//prompt("What is your name?");
//prompt("What is your crush name <3?");

var loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1

if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%. You love each other like Kanye loves Kanye");
    
} else if (loveScore > 30 && loveScore <= 70) {
    alert("Your love score is " + loveScore + "%");
    
} else if (loveScore < 30){
    alert("Your love score is " + loveScore + "% You go together like oil and water");
}