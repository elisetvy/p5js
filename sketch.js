function setup() {
  createCanvas(600, 400); // width, height
}

function draw() {
  background(220);

// displays the x and y position of the mouse on the canvas
fill(255) // white text
text(`${mouseX}, ${mouseY}`, 20, 20);
}