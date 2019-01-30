/*
Daniel Gelfand
SoftDev2 pd6
K#00 -- I See A Red Door...
2019-01-31 R
*/

// 0 is dot mode
// 1 is box mode
var mode = 0;

// Switch between modes
var toggle = function(){

  var btn = document.getElementById("tgl");

  if(mode == 0){
    mode = 1;
    alert("Switching to box mode");
    btn.innerHTML = "Box Mode - Toggle"
  }
  else{
    mode = 0;
    alert("Switching to dot mode");
    btn.innerHTML = "Dot Mode - Toggle"
  }
}

var clr = function(){

  location.reload();

}

var draw = function(event){
  //alert("drawing");
  //console.log(event);

  var canvas = document.getElementById("slate");
  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ff0000"; //red color

  // if dot mode
  if(mode == 0){
    alert("drawing dot");
    ctx.beginPath();
    ctx.ellipse(event.clientX, event.clientY , 10 , 10, Math.PI , 0, 2 * Math.PI);
    ctx.fill();
  }
  // rect mode
  else{
    alert("drawing box")
    ctx.fillRect(event.clientX, event.clientY , 50, 100)
  }

}
