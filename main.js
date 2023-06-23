song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
song=loadSound("music.mp3");
}

function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);

poseNet = ml5.poseNet(video, modelLoaded);
posenet.on('pose ', gotPoses);
}

function modelLoaded(){
    console.log('posenet is Initalized');
}

function draw(){
image(video,0,0,600,500);
Fill("FF0000");
stroke("FF0000");
if (scoreRightWrist> 0.2) {
    

circle(rightWristX,rightWristY, 20)

if (rightWristY >0 && rightWristY<= 100) {
    document.getElementById("speed").innerHTML="speed = 0.5x";
    song.rate(0.5);
    

}
else if(rightWristY >100 && rightWristY<= 200) {
    document.getElementById("speed").innerHTML="speed = 1x";
    song.rate(1);

}
else if(rightWristY >200 && rightWristY<= 300) {
    document.getElementById("speed").innerHTML="speed = 1.5x";
    song.rate(1.5);

}
else if(rightWristY >300 && rightWristY<= 400) {
    document.getElementById("speed").innerHTML="speed = 2x";
    song.rate(2);


}
else if(rightWristY >400 && rightWristY<= 500) {
    document.getElementById("speed").innerHTML="speed = 2x";
    song.rate(2);

}
}
if(scoreLeftWrist > 0.2)
{
circle(leftWristX,leftWristY,20);
inNumberleftWristX=Number(leftWristX);
remove_decimals=floor(inNumberleftWristY);
leftWristY_divide_1000=remove_decimals/1000;
volume=leftWristY_divide_1000 *2;
document.getElementById("volume").innerHTML="volume =" +volume;
song.setVolume(volume);
}
}

function play(){
 song.play();
 song.setVoume(1);
 song.rate(1);
}
function gotPoses(){
    if (results.length > 0) {
        console.log(results);
        scoreRightWrist=results[0].pose.keypoints.score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
       console.log("scoreRightWrist ="+ scoreRightWrist+ "scoreLeftWrist=" +scoreLeftWrist);

        console.log("scoreLeftWrist=" +scoreLeftWrist);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.Y;
        console.log("leftWristX = " +leftWristX+"leftWristY="+leftWristY);
       

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.Y;
        console.log("rightWristX = " +rightWristX+"rightWristY="+rightWristY);

    }
}