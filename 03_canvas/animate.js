var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var radius = 0;
var growing = true;
var clear = function(e){};
var drawDot = function(){
    
    // clear();
    //draw the dot
    ctx.beginPath(); //begins path 
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0 ,2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    //... fill this in yuhurd
};

//stop the circle
var stopIt = function(){
    console.log( requestID );
};

dotButton.addEventListener("click". drawDot);
stopButton.addEventListener("click". stopIt);
