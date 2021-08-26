noseX=0;
noseY=0;
rightWristX=0;
leftWristX=0;
difference=0;

function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of the square wille be "+difference+"pixels";
    fill('#000000');
    stroke('#000000');
    text(Nirvan,noseX,noseY);
}

function setup(){
    canvas=createCanvas(550,450);
    canvas.position(760,100);
    video=createCapture(VIDEO);
    video.size(550,450);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");

}

function gotPoses(results){
    if (results.length>0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX - "+noseX+" noseY - "+noseY);

        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(rightWristX-leftWristX);
    }
}