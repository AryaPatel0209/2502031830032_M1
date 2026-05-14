document.getElementById("text").innerHTML = " Hello world";
document.getElementsByClassName("tex")[0].innerHTML = " world";

let a = 15;
let y = 15;
let z = 15;
let x = a + y * z / y - a ;
// let b = a * x; 

document.getElementById("demo").innerHTML = "sum of a + y * z / y - a = " + x;
// document.getElementById("demo").innerHTML = "sum of a * x = " + b;
