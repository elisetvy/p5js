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

  // big gray mountains
  stroke(0);
  fill(80);
  triangle(-40, 300, 75, 100, 250, 300); //  point 1 x, point 1 y, point 2 x, point 2 y, etc
  triangle (100, 300, 300, 100, 500, 300);

// displays the x and y position of the mouse on the canvas
fill(255) // white text
text(`${mouseX}, ${mouseY}`, 20, 20);
}