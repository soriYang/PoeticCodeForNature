let rabbit;
let turtle;

function setup() {
  createCanvas(400, 400);
  rabbit = new Particle();
  turtle = new Particle();



}


function draw() {
background(255);
  if (mouseIsPressed) {
    gravity = createVector(0, 0.1);
    rabbit.addForce(gravity);
  }
  if (mouseIsPressed) {
  gravity = createVector(0, 0.001);
  turtle.addForce(gravity);
  }
  rabbit.update();
  rabbit.show();
  turtle.update();
  turtle.show();
}
class Particle {
  constructor() {
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);

    this.c = color(0);
    this.w = 30;
  }

  addForce(aForce) {
    this.acc.add(aForce);
  }

  update() {
    this.checkEdge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);

    this.acc.set(0, 0);
  }


  checkEdge() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
    }
    if (this.pos.y > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
    }

    if (this.pos.y < 0) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = 0;
    }
  }


  show() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
  show() {
    fill(this.c);
    ellipse(this.pos.x, this.pos.y, this.w, this.w);
  }
}
