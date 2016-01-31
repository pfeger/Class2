function setup () {
  createCanvas(600,600);
}

function draw() {
  background(255)
  //call function
  createSmiley(random(0,600), random(0,600), 60, 60);
}

function createSmiley(x,y,smileySize) {
  //mouth
  arc(x, y+8, 25, 15, 0, PI)
  //pupils
  ellipse(x-10, y-7, 2, 6)
  ellipse(x+10, y-7, 2, 6)
  //eyes
  ellipse(x-10, y-7, 8, 12)
  ellipse(x+10, y-7, 8, 12)
  //face
  ellipse(x, y, 60, 60)
  noFill()
}
