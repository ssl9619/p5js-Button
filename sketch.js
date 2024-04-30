let testButton;

function setup() {
  createCanvas(400, 400);
  testButton = new button(width/2,height/2,100,100, true);
}

function draw() {
  background(220);

  let c = color(255,0,0);
  let cH = color(255,0,255);
  testButton.drawButton(c,cH);
  let tC = color(255,255,255);
  let tH = color(0,0,0);
  let tStroke = color(0);

  testButton.drawText("hi", 
  32,
  color(255,255,255), 
  color(0,0,0),
  color(0,0,0),
  color(255,255,255),
  3
  );

  testButton.detectHover();

  text(mouseX, 30, 30);


}