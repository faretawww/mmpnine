//The setup function only happens once
var salut=0
var tri1=300

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  background(137,182,161); 
}

//The draw function happens over and over again
function draw() {
  //an RGB color for the canvas' background
  //circle
  stroke(84,118,102) // an RGB color for the circle's border
  strokeWeight(1)
  fill(mouseX,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(random(width),random(height),20,20); // center of canvas, 20px dia
  fill(63,115,90)
  strokeWeight(0)
  ellipse(mouseX,mouseY,200,200)
  fill(63,115,90)
  stroke(71,190,132)
  strokeWeight(1)
  textSize(100)
  textFont('Garamond')
  text('dreaming',70,250)
  


}
