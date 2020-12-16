function setup() {
  createCanvas(windowWidth, windowWidth);
  stroke (225,225,225);
  background (100,200,200); 
  //strokeWeight (0);
  frameRate (1);
  //cursor();
}

function draw() {
  translate(30,30);
  var width= windowWidth-2*30;
  var height= 720-2*30;
  var shift= 3;
  var space= 10;
  var num= 15; + random(-shift, shift);
  var sideLen= width/num; 
  
  for(var y=0; y<height; y=y + sideLen){
    for(var x=0; x<width; x=x + sideLen){
      fill (random(225,50), random(225,50), random(225,200));
      quad(x+space+random(-shift,shift), y+space+random(-shift,shift), x+sideLen-space+random(-shift,shift), y+space+random(-shift,shift), x+sideLen-space+random(-shift,shift), y+sideLen-space+random(-shift,shift), x+space+random(-shift,shift), y+sideLen-space+random(-shift,shift));
    }
  }
//noLoop();
}