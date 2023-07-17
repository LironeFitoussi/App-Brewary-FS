function whosPaying(names) {
    var friends = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var finder = Math.floor(Math.random() * friends.length + 1);
    var chosen = friends[finder - 1]
    return chosen + " is going to buy lunch today!";  
}