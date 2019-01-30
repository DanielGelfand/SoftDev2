// 0 is dot mode
// 1 is box mode
var mode = 0;

// Switch between modes
var toggle = function(){

  if(mode == 0){
    mode = 1;
    alert("Switching to box mode");
  }
  else{
    mode = 0;
    alert("Switching to dot mode");
  }
}

var clr = function(){

  location.reload();

}

var draw = function(){
  //alert("drawing");

  if(mode == 0){
    var canvas = document.getElementById("slate");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ff0000";
    ctx.fillRect(0, 0, 5 , 5);
  }



}
