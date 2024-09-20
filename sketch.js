let cloudOneX = 50;
let lineXone = 0;
let lineYone = 0;

function setup() {
  createCanvas(400, 400); // width, height
}

function draw() {
  background("navy");
  frameRate(15); // set frame rate to 15 (default is 60 for most computers)

  // shooting star
  stroke("yellow");
  line(lineXone, lineYone, lineXone + 30, lineYone - 30); // x1, y1, x2, y2

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

  // clouds
  fill(255);
  ellipse(cloudOneX, 50, 80, 40); // center x, center y, width, height
  ellipse(cloudOneX - 40, 100, 60, 20);
  ellipse(cloudOneX + 20, 150, 40, 10);

  // growing trees

  // trunk
  fill("rgb(118, 80, 72)");
  rect(40, 270, 15, 50);
  // leaves
  fill("green");
  triangle(25, 270, 45, 240 - frameCount % 290, 70, 270); // top corner of triangle needs to move up on canvas each time draw() runs

  // trunk
  fill("rgb(118, 80, 72)");
  rect(340, 330, 15, 50);
  // leaves
  fill("green");
  triangle(325, 330, 345, 240 - frameCount % 290, 370, 330);


  // sets the x coordinate to the frame count
  // resets at left edge
  cloudOneX = frameCount % width;

  // set shooting star to random location
  lineXone = random(0, width);
  lineYone = random(0, height / 2);

  // displays the x and y position of the mouse on the canvas
  // fill(255) // white text
  // text(`${mouseX}, ${mouseY}`, 20, 20);
}