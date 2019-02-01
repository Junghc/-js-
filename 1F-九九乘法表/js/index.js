var i;
var j;
var inHtml = "";
for (i = 2; i < 10; i++) {
  //block = "num" + i;
  //document.getElementsByClassName(block)
  inHtml += "<div class='content'><h1>" + i + "</h1>";
  for (j = 1; j < 10; j++) {
    //document.write(i+"x"+j+"="+i*j+"\n");
    // document.
    inHtml += i + "x" + j + "=" + i * j;
  }
  inHtml += "</div>";
}
document.getElementsByClassName("container")[0].innerHTML += inHtml;