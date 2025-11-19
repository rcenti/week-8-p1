let x = 50;
let y = 50;
let speedX = 3;
let speedY = 3;
let boing;

function preload(){
    boing = loadSound("assets/194812__funnyman850__epic-angry-boatinception-sound-effect.mp3");
}

function setup() {
    createCanvas(600, 400);
}

function draw() {
    background(255);
    circle(x, y, 100);
    if (x < 50 || x > width - 50) {
        speedX *= -1;
        boing.play();
    }
    if (y < 50 || y > height - 50) {
        speedY *= -1;
        boing.play()
    }
    x += speedX;
    y += speedY;
}