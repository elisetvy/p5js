function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // displays the x and y position of the mouse on the canvas
  fill(255); // white text
  text(`${mouseX}, ${mouseY}`, 20, 20);
}