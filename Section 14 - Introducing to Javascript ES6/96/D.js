function getMilk(money, costPerBottle) {   
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
        
console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk");
    
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    return calcChange(money, costPerBottle); //Remainder of this devision.
    }

function clacBottles(money, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle)
    return numberOfBottles
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle; 
    return change
}

console.log("Hello master, here is your " + getMilk(5, 1.5) + "$ change");