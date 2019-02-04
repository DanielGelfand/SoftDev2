/*
<<<<<<< HEAD
  StuyNaught - Daniel Gelfand and Ahnaf Hasan
  SoftDev2 pd6
  K#01 -- ...and I want to Paint It Better
  2019-02-01 F
*/

// Refreshes the page
var clr = function(){
    
    location.reload();

}

var draw = function(event){
    //alert("drawing");
    //console.log(event);
    storedCoords = [];
    var canvas = document.getElementById("playground");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ff0000"; //red color
    xCoord = event.offsetX;
    yCoord = event.offsetY;
    ctx.beginPath(); //begins a new path for drawing
    /*
      offsetX provides the offset in the X coordinate of the
      mouse pointer between the event and padding of target.

      offsetY has the same function as offsetX but for the Y coordinate
    */
    ctx.ellipse(xCoord, yCoord , 10 , 10, Math.PI , 0, 2 * Math.PI);
    ctx.fill();
    storedCoords.push(xCoord);
    storedCoords.push(yCoord);
    console.log(storedCoords[0]);
    console.log(storedCoords[1]);
=======
StuyNaught - Daniel Gelfand and Ahnaf Hasan
SoftDev2 pd6
K#02 -- Connecting the Dots
2019-02-04 M
*/

var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');

var clear = document.getElementById('clear');


var prev_Pos = [];

var dot = function make_dot(x, y) {
    ctx.fillStyle = "#abcdef";
    if (prev_Pos == []) { return }
    console.log("here");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(prev_Pos[0], prev_Pos[1]);
    ctx.stroke();
    ctx.beginPath();
    ctx.ellipse(x, y, 5, 5, 360, 0, 360);
    ctx.ellipse(prev_Pos[0], prev_Pos[1], 5, 5, 360, 0, 360);
    console.log("there");
    prev_Pos = [x, y];
    ctx.fill();
}

var cls = function c() {
    /*ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight)
    prev_Pos = []
    return true*/
    location.reload(); //refresh page
}

canvas.addEventListener('click', function(e) {
    dot(e.offsetX, e.offsetY);
})

clear.addEventListener('click', cls )

canvas.oncontextmenu = function(e) {
    e.preventDefault();
    prev_Pos = [];
    dot(e.offsetX, e.offsetY);
>>>>>>> 6d9fedfd48f0b3f0cf6ccafc341910d0369c70c7
}
