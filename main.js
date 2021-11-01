noseX = 0;
noseY = 0;

difference = 0;

rightWristX =0;
leftWristX = 0;




function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    
    canvas = createCanvas(500 , 500);
    canvas.position(600 , 100);
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
    //It will give x and y coordinates of 17 parts 
    //It is a function to write results 
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}



function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = " + noseX + ",  NoseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX-rightWristX);

        console.log("leftWristX = " + leftWristX + ", rightWristX = " + rightWristX + ", Difference = " + difference);

    }
}



function draw(){
    background('#FFD700');
    fill('#F#00FF00');
    stroke('#FF0000');
    document.getElementById("square_side").innerHTML = "Width & height of a circle will be " + difference + " px";
    circle(noseX , noseY , difference);
}







