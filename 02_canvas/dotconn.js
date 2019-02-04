/*
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
}
