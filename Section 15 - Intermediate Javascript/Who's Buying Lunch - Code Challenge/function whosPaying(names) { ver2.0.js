function whosPaying(names) {
    var friends = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    var finder = Math.floor(Math.random() * friends.length);
    var chosen = friends[finder]
    return chosen + " is going to buy lunch today!";  
}