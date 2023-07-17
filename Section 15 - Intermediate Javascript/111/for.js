var output = [];

function fizzBuzz() {
    // Write code here.
    for (var count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0){
            output.push("FIzzBuzz!")
        } else if (count % 5 === 0){
            output.push("Buzz")
        } else if (count % 3 === 0){
            output.push("Fizz")
        }   else {
            output.push(count);
        }
    
    }

    console.log(output);
}
