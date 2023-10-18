let words = [
  "Bounce",
  "is",
  "deflection",
  "the",
  "event",
  "where",
  "an",
  "object",
  "collides",
  "with",
  "and",
  "bounces",
  "against",
  "a",
  "plane",
  "surface",

];

class Word {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.xVel = random(1, 3);
    this.yVel = random(1, 3);
    this.color = 'black';
    this.text = random(words); 
  }

  checkBoundary() {
    if (this.y > height || this.y < 0) {
      this.yVel *= -1;
    }

    if (this.x > width || this.x < 0) {
      this.xVel *= -1;
    }
  }

  update() {
    this.y += this.yVel;
    this.x += this.xVel;
    this.checkBoundary();
  }

  draw() {
    fill(this.color);
    textSize(20);
    text(this.text, this.x, this.y);
  }
}

let numWords = 20;
let wordsArray = [];

let phrase =
  "Bounce is deflection (physics), the event where an object collides with and bounces against a plane surface.";

let MARGIN = 40;

let currentMaxIndex;
let nextUpdateMillis;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(LEFT, TOP);
  textSize(20);

  currentMaxIndex = 0;
  nextUpdateMillis = 0;

  for (let d = 0; d < numWords; d += 1) {
    let aWord = new Word();
    aWord.text = random(words); 
    wordsArray.push(aWord);
  }
}

function draw() {
  background(220);

  for (let d = 0; d < wordsArray.length; d += 1) {
    let aWord = wordsArray[d];
    aWord.draw();
    aWord.update();
  }

  fill(255, 182, 130)
  textSize(100);
  if (millis() > nextUpdateMillis) {
    currentMaxIndex = min(currentMaxIndex + 1, phrase.length);
    nextUpdateMillis = millis() + random(30, 160);
  }

  let phraseToDraw = phrase.slice(0, currentMaxIndex);
  text(phraseToDraw, 100, 50, width - 2 * MARGIN, height);
  
}
