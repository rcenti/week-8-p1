let osc1;
let osc2;
let osc3;

function setup(){
    createCanvas(400, 400);
    background(0);
    osc = new p5.SinOsc();

    osc1.amp(0.5);
    osc1.freq(50);

    osc2.amp(0.5);
    osc2.freq(100);

    osc3.amp(0.5);
    osc3.freq(500);
}