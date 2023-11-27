Aa_Raaha_Ho_Mein_Zindagi="";
Mahiye_Jinna_Sohna="";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){
    Aa_Raaha_Ho_Mein_Zindagi = loadSound("Aa_Raaha_Ho_Mein_Zindagi.mp3");
    Mahiye_Jinna_Sohna = loadSound("Mahiye_Jinna_Sohna.mp3");
}

function draw(){
    image(video,0,0,600,530);
}