leftWristX=0;
rightWristX=0;
difference=0;
function preload(){


}


function setup(){

    video = createCapture(VIDEO)
    video.size(600,800)
    canvas = createCanvas(675,675)
    canvas.position(650,150)
    posenet = ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)

}



function draw(){

    background("#964B00")
    textSize(difference)
    fill("#C0C2C9")
    text('Raymond',60,375)
}

function modelLoaded(){

    console.log("Model has been sucessfuly loaded!")
    
}

function gotPoses(result){

    if( result.length >0){

        console.log(result)
        leftWristX=result[0].pose.leftWrist.x;
        rightWristX=result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX)

    }
}