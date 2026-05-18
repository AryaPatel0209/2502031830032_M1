let a = document.getElementById("bulb");
a.addEventListener("mouseover", () => {
  a.src = "/Images/bulb2.png";
});
a.addEventListener("mouseout", () => {
  a.src = "/Images/bulb1.png";
});
var key = document.getElementById("key");
key.addEventListener("keypress", () => {
  var a = new Date();
  alert(a);
});

var rows = document.getElementById("rows");
var cols = document.getElementById("cols");
var btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  document.write("<table border='2' width='50%'>");
  for (let i = 0; i < rows.value; i++) {
    document.write("<tr>");
    for (j = 0; j < cols.value; j++) {
      document.write("<td>" + "[" + i + "]" + "[" + j + "]" + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
});
var colors = ["red", "green", "blue", "pink", "black", "orange"];
var mybody = document.getElementById("mybody");
var i = 0;
setInterval(() => {
  mybody.style.backgroundColor = colors[i];
  ++i;
  if (i == colors.length) {
    i = 0;
  }
}, 1000);
