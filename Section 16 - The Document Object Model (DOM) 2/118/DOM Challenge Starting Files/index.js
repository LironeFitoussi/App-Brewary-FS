
document.getElementsByTagName("li")[2].innerHTML = "Lirone";
//<li class="list">Third</li> --> output "Lirone" instead of "Third"
document.getElementsByTagName("li").style.color = "purple";
//Output = Error (has to precise one)
document.getElementsByClassName("btn");

document.getElementsByClassName("btn")[0].innerHTML = "sdf";
//<button class="btn" style=":active color:red;">Click Me</button> output "sdf" instead of "Click Me"

document.getElementsByClassName("btn")[0].style.backgroundColor = "blue";

//13:04 Test
document.querySelector("li a").style.color ="red"

