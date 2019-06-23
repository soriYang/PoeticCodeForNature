let x, y;
x = 0;
y = 0;
let w = 100;
let p = 0.1;

function setup() {
  createCanvas(500, 500);
  background(300, 200, 100);

}

function draw() {
  if (random() > p) {
    fill(random(255));
    strokeWeight(10);
    stroke(random(255));
    ellipse(x + w, y - w, x + y, y + w);
  } else {
    stroke(random(255));
    line(x + w, y - w, x + y, y + w);
  }
  x = x + w;

  if (x > width) {
    y = y + w;
    x = 0;
  }
  if (y > height) {
    background(300, 200, 100);

    x = 0;
    y = 0;
    w = random(10, 120);
    p = random(10, 120);
    console.log(p);
  }

}
