class Particle {

  constructor(position) {
    this.acceleration = createVector(0, 0.08);
    this.velocity = createVector(random(-5,0), random(0, 1));
    this.position = position.copy();
    this.lifespan = 200;
  }

  run() {
    this.update();
    this.showHerniatedDisc();
    this.showMoney();
    this.showTarsalgia();
    this.showTask();
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -=2;
  }

  // Method to display
  showHerniatedDisc() {
    stroke(100,100,20, this.lifespan);
    strokeWeight(1);
    fill(255,150,20, this.lifespan);
    text("허리디스크",this.position.x-6, this.position.y-2, 12, 12);
  }
  showMoney() {
    stroke(150,20,150, this.lifespan);
    strokeWeight(1);
    fill(255,150,20, this.lifespan);
    text("돈",this.position.x-10, this.position.y-5, 13, 13);
  }
  showTarsalgia() {
    stroke(200,150,255, this.lifespan);
    strokeWeight(1);
    fill(255,150,20, this.lifespan);
    text("발목통증",this.position.x-5, this.position.y-3, 12, 12);
  }
  showTask() {
    stroke(100,220,100, this.lifespan);
    strokeWeight(1);
    fill(255,150,20, this.lifespan);
    text("과제",this.position.x-5, this.position.y-5, 12, 12);
  }



  // Is the particle still useful?
  isDead() {
    if (this.lifespan < 1) {
      return true;
    } else {
      return false;
    }
  }
}
