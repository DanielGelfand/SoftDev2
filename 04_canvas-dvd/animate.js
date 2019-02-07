/*
Unicorns - Daniel Gelfand, Jabir Chowdhury, Jiajie Mai
SoftDev2 pd6
K#04 -- What is it saving the screen from?
2019-02-07 R
*/
var canvas = document.getElementById('playground');
var ctx = canvas.getContext('2d');
var radius = 0;
var growing = true;
var reqID = 0;
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var dvdButton = document.getElementById('dvd');

var clear = function(e){
    ctx.clearRect(0,0, canvas.width,canvas.height);
};

var drawDot = function(event){

    stopIt();
    clear();
    //draw the dot
    ctx.beginPath(); //begins path

    if(radius == 0){
	growing = true;
    }
    else if(radius == canvas.width/2 || radius == canvas.height/2){
	growing = false;
    }

    if(growing){
	radius += 1;
    }
    else{
	radius -= 1;
    }

    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0 ,2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    reqID = window.requestAnimationFrame(drawDot);
    console.log(reqID);
};

var dvdLogoSetup = function(){

    stopIt();

    //Dimensiosn to draw the image in
    var rectWidth = 100;
    var rectHeight = 50;

    //Init spawn of dvd logo
    var rectX = Math.floor( Math.random() * (canvas.width - rectWidth) );
    var rectY = Math.floor( Math.random() * (canvas.height - rectWidth) );

    var xVel = 1;
    var yVel = 1;

    var dvdLogo = function(){
       clear()

       //Image setup
	     var logo = new Image(rectWidth,rectHeight);
       logo.src = "logo_dvd.jpg";
       ctx.drawImage(logo,rectX,rectY,rectWidth,rectHeight);

       if(rectX >= canvas.width - rectWidth || rectX <= 0){
         xVel *= -1;
       }
       //Modify x coordinate for mvmt of logo
       rectX += xVel;

       if(rectY >= canvas.height - rectHeight || rectY <= 0){
         yVel *= -1;
       }
       //Modify y coordinate for mvmt of logo
       rectY += yVel;

	     reqID = window.requestAnimationFrame(dvdLogo);
    };
    dvdLogo();

};

//stop the circle
var stopIt = function(){
    console.log( reqID );
    //alert("stopping");
    window.cancelAnimationFrame( reqID );
};

dotButton.addEventListener("click", function(){
  radius = 0;
  drawDot();
});
stopButton.addEventListener("click", stopIt);
dvdButton.addEventListener("click", dvdLogoSetup);
