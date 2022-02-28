noseX=0;
noseY=0;

difference=0;
rightwristX=0;
leftwristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(700,500);
canvas=createCanvas(550,550);
canvas.position(900,140);
poseNet=ml5.poseNet(video,modalLoaded);
poseNet.on('pose',gotPoses);
}
function modalLoaded(){
console.log('Posenet is Initialized');
}
function preload(){
}
function draw(){
background('#92e8ca');
document.getElementById("square_side").innerHTML="Width and Height of the Square Will be "+difference+"px";
fill('#2a422a');
stroke('#09ed15');
square(noseX,noseY,difference);
}
function gotPoses(results){
if (results.length>0)
{console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
console.log("noseX="+noseX+"noseY="+noseY);
leftwristX=results[0].pose.leftWrist.x;
rightwristX=results[0].pose.rightWrist.x;
difference=floor(leftwristX-rightwristX);
console.log("leftwristX="+leftwristX+"rightwristX="+rightwristX+"difference="+difference);
}
}
