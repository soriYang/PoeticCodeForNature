let herniatedDisc;
let money;
let tarsalgia;
let task;
let img1;
let img2;


function preload() {
  img1 = loadImage('dis_2.png');
  img2= loadImage('bg.png');
}

function setup() {
  createCanvas(300, 400);

  herniatedDisc = new ParticleSystem(createVector(width / 3, 140));

  tarsalgia = new ParticleSystem(createVector(width / 2, 140));

  money = new ParticleSystem(createVector(width / 2, 140));

  task = new ParticleSystem(createVector(width / 2, 140));

}

function draw() {
  background(255);
  image(img2,0,0);
image(img1, 120, 90, 200, 300);
  herniatedDisc.addParticle();
  herniatedDisc.run();
  money.addParticle();
  money.run();
  tarsalgia.addParticle();
  tarsalgia.run();
  task.addParticle();
  task.run();
}
