var hip = [];
let bigHip;
let gas;
let poo;


function preload() {
  bigHip = loadImage('hip.png');
  gas = loadImage('gas.png');
  poo = loadImage('poo.png');
}

function setup() {
  createCanvas(500, 500);
}

function mousePressed() {
  var p = new Particle(mouseX, mouseY, random(-1,-1));
  hip.push(p);
}

function keyPressed() {
  if (key == ' ') {
    hip.splice(0, 10);

  }
}

function draw() {
  background(255);
  image(bigHip, 170, 0);
  var wind = createVector(1,2);

  for (var i = 0; i < hip.length; i++) {

    var gravity1 = createVector(0, 5 * hip[i].mass);
    hip[i].applyForce(gravity1);

    if (mouseIsPressed) {
      hip[i].applyForce(wind);
    }

    hip[i].update();
    hip[i].edges();
    hip[i].display();
    image(bigHip, 170, 0);
  }
}

function Particle(x, y, m) {
  this.pos = createVector(220, 60);
  this.vel = createVector(10, 10);
  this.acc = createVector(20, 20);
  this.mass = m;

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
    image(poo, this.pos.x, this.pos.y, 50, 50);
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y = this.vel.y * -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = width;
    }

    if (this.pos.x < 1) {
      this.vel.x = this.vel.x * -1;
      this.pos.x = 2;
    }

  }


}
