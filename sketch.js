function setup() {
  createCanvas(400, 400); // width, height
}

function draw() {
  background("navy");

  // moon
  fill(255);
  stroke(0);
  circle(350, 50, 100); // x, y, diameter of circle

  // overlapping navy circle to make crescent moon
  stroke("navy");
  fill("navy");
  circle(320, 50, 100);

// displays the x and y position of the mouse on the canvas
fill(255) // white text
text(`${mouseX}, ${mouseY}`, 20, 20);
}