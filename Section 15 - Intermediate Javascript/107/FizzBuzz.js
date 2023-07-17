var output = [];
var count = 1;

function fizzBuzz() {
    // Write code here.
    
    if (count % 3 === 0 && count % 5 === 0){
        output.push("FIzzBuzz!")
    } else if (count % 5 === 0){
        output.push("Buzz")
    } else if (count % 3 === 0){
        output.push("Fizz")
    }   else {
        output.push(count);
    }
    
    count++;

    console.log(output);
}



