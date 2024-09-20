let cloudOneX = 50;

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
  triangle(-40, 300, 75, 100, 250, 300); //  x1, y1, x2, y2, x3, y3
  triangle (100, 300, 300, 100, 500, 300);

  // grass
  fill("rgb(50, 76, 50)");
  rect(0, 300, 400, 100); // upper left point (x, y), width, height

  // cloud
  fill(255);
  ellipse(cloudOneX, 50, 80, 40); // center x, center y, width, height

  // sets the x coordinate to the frame count
  // resets at left edge
  cloudOneX = frameCount % width;

// displays the x and y position of the mouse on the canvas
fill(255) // white text
text(`${mouseX}, ${mouseY}`, 20, 20);
}