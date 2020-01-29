var ill;
var constellations;

var h1;


function preload() {
  ill = loadImage("./assets/astr.png");
}

//
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  imageMode(CENTER);
  h1 = createElement('h1', 'Help me find the constellations!');
  h1.position(70, 530);
  h1.style("font-size", "15pt");
  h1.style("font-family", "monospace");
  h1.style("color", "#545454");


  constellations = selectAll('p');
  for (var i = 0; i < constellations.length; i++) {
    constellations[i].position(random(width), random(400));
    constellations[i].mouseOver(changeColor);
    constellations[i].mouseOut(revertColor);
  }
}

function draw() {
  image(ill, width / 2, (height / 2) + 40, ill.width/1.5, ill.height/1.5);
}

function changeColor() {
  this.style("color", "#fffbed");
  this.style("font-size", "15pt");
}

function revertColor() {
  this.style("color", "#141414");
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
