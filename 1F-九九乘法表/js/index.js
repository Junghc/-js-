var i;
var j;
var inHtml = "";
for (i = 2; i < 10; i++) {
  inHtml += "<div class='content'><div class='h1'>" + i + "</div>" ;
  for (j = 1; j < 4; j++) {
    inHtml += "<div class='item-left'>"+ i + " x " + j + " = " + i * j + "</div>";
  }
  for (j = 4; j < 10; j++) {
    inHtml += "<div class='item-right'>"+ i + " x " + j + " = " + i * j + "</div>";
  }
  inHtml += "</div>";
}
document.getElementsByClassName("container")[0].innerHTML += inHtml;