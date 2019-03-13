/*
Daniel Gelfand
SoftDev2 pd6
K#09 -- Connect the Dots
2019-03-13
*/

var pic = document.getElementById("vimage");
var prev = 0;

var drawDot = function(e){

  if (prev != 0)
  {
      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

      // Set line attributes
      line.setAttribute( "x1", prev.getAttribute( "cx" ) );
      line.setAttribute( "y1", prev.getAttribute( "cy" ) );
      line.setAttribute( "x2", e.offsetX );
      line.setAttribute( "y2", e.offsetY );
      line.setAttribute( "stroke", "black" );

      // add line to pic
      pic.appendChild( line );
    }


    var dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    //alert(e)
    dot.setAttribute("cx", e.offsetX);
    dot.setAttribute("cy", e.offsetY);
    dot.setAttribute("r", 10);
    dot.setAttribute("fill", "red");
    dot.setAttribute("stroke", "black");
    pic.appendChild(dot)

    // Prev holds dot just added
    prev = dot
};

  // Reloads page
var clear = function(){
  location.reload();
};

pic.addEventListener("click",drawDot);
document.getElementById("clr").addEventListener("click", clear);