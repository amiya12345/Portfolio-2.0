var canvas;
var circle = 200;
var rot;
var freq = 0.000005; 
var cont = 0;
var r;

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}
function setup()
{
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');
 }
  function draw() {
	background('#121212');
	translate(width / 2, height / 2);
	rotate(radians(rot));
  
   ellipseMode(RADIUS);
	for (var i=0; i<500; i ++) {
	  circle= 200 + 50*sin(millis()*freq*i);
	  col=map(circle,150,250,255,60);
	  r=map(circle,150,250,5,2);
	  fill('#1dd1a1');
	  noStroke();
	  ellipse(circle*cos(i), circle*sin(i),r,r);    
	  rot=rot+0.00005;
	}
  }