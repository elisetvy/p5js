function setup() {
  createCanvas(600, 400); // width, height
}

function draw() {
  background(135, 206, 235);

  // circle in the center with a width of 100
  // circle(200, 200, 100);

  // when mouse is pressed, circles turn black
  // if (mouseIsPressed) {
  //   fill(0);
  // } else {
  //   fill(255);
  // }

  // white circles drawn at mouse position
  // circle(mouseX, mouseY, 100);

  // sun in the top right corner w/ yellow fill + thick orange outline
  fill("yellow");
  stroke("orange");
  strokeWeight(20);
  circle(550, 50, 100);

  // reset outline
  stroke(0); // black outline
  strokeWeight(1);

  // grass
  fill("green");
  rect(0, 200, 600, 200); // x, y, width, height

  // open emoji keyboard w/ control + command + space
  text("🌸", 100, 250); // x, y
  text("🐞", 300, 250);
  textSize(75);
}
