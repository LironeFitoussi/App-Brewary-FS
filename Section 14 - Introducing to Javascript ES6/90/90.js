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

console.log("Buy " + calcBottles(money, 1.5) + " bottles");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
    
    return money % 1.5; //Reminder of this division
}

function calcBottles(statingMoney, costPerBottle) {

    var numberOfBottles = Math.floor(statingMoney / costPerBottle);

    return numberOfBottles;
}

getMilk(5);