let ambience;
let festival;
let music;
let amp1;
let amp2;
let amp3;

function preload(){
    ambience = loadSound("assets/834100__silverillusionist__vastness-of-the-cosmos-music-sample.wav");
    festival = loadSound("assets/320069__macdaddyno1__japanese-obon-festival.mp3");
    music = loadSound("assets/833211__silverillusionist__ms.wav");
}

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    amp1 = new p5.Amplitude();
    amp1.setInput(ambience);

    amp2 = new p5.Amplitude();
    amp2.setInput(festival);

    amp3 = new p5.Amplitude();
    amp3.setInput(music);


}

function draw(){
    background(0);
    if (key === '1'){
        rect(width/2, height/2, amp1.getLevel() * width, 100);
    }
    if (key === '2'){
        rect(width/2, height/2, amp2.getLevel() * width, 100);
    }
    if (key === '3'){
         rect(width/2, height/2, amp3.getLevel() * width, 100);
    }
   

}

function keyPressed() {
    if (key === '1'){
        if (ambience.isPlaying()){
            ambience.stop();
        } else {
            ambience.play();
        }
    } 
    
    else if (key === '2'){
        if (festival.isPlaying()){
            festival.stop();
        } else {
            festival.play();
        }
    } 
    
    else if (key === '3'){
        if (music.isPlaying()){
            music.stop();
        } else {
            music.play();
    }
    }

}