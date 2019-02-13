
var clock = setInterval(function () {time();} , 1000);

function time(){
  var date = new Date();
  hh = date.getHours();
  mm = date.getMinutes();
  ss = date.getSeconds();
  
  document.getElementById("clock").innerHTML = hh + ':' + mm + ':' +ss;
  document.getElementById("ss").style.transform = "rotate(1deg)"; 
}