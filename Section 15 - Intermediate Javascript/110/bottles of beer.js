var output = [];
var bottles = 100;

function bootlesOfBeer() {
    // Write code here.
    while (bottles <= 100 && bottles >=1) {
        console.log(bottles + " bottles of beer on the wall, " + bottles + " bottles of beer.");

        bottles--;

        console.log("Take one down and pass it around, " + bottles + " bottles of beer on the wall");
    } 
}
