/*
CoffeeScriptors - Daniel Gelfand and Ricky Lin
SoftDev2 pd6
K#10 -- Ask Circles [Change || Die]
2019-03-14
*/

var pic = document.getElementById("vimage");
//var prev = 0;

var drawDot = function(e){

    var children = pic.children;
    var blue = false;
    for(child of children){
      //console.log(child.getAttribute('cx'))
      if( inBounds(child,e)){
        changeCircle(child);
        blue = true;
        break;
      }
      else {
        blue = false;
      }
    }

    if (!(blue)) {
      pic.appendChild(createCircle(e.offsetX, e.offsetY));
    }

    //prev = 0;
};

// Clears image
var clear = function(){
  while (pic.lastChild) {
      pic.removeChild(pic.lastChild);
    }
};

// Checks if mouse click is in bounds of the given circle
// Inside circle if d^2 < r^2
var inBounds = function(circle, event){

 // x,y coords of circle
 var cx = circle.getAttribute("cx")
 var cy = circle.getAttribute("cy")

 // x,y coords of point
 var px = event.offsetX
 var py = event.offsetY

 var radius = circle.getAttribute("r")

 return Math.pow( (px-cx), 2) + Math.pow( (py-cy), 2) < Math.pow(radius,2)
}

var createCircle = function(x,y){
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  return c;

}

var changeCircle = function(circle){
  if(circle.getAttribute("fill") == "red"){
    circle.setAttribute("fill", "blue")
  }
  else{
    // create circle at random location
    var rand = createCircle(Math.random() * 500, Math.random() * 500)
    pic.appendChild(rand)
    pic.removeChild(circle)
  }
}

pic.addEventListener("click",drawDot);
document.getElementById("clr").addEventListener("click", clear);