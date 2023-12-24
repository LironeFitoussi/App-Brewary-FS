function getMilk(money) {   
    console.log("takeMoney")
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
        
console.log("Buy " + calcBottles(money, 1.5) + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    return calcChange(money, 1.5); //Remainder of this devision.
    }

function clacBottles(money, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle)
    return numberOfBottles
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle; 
    return change
}

console.log("Hello master, here is your " + getMilk(5) + "$ change");