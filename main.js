function setup()
{
    canvas = createCanvas(400, 400);
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas.position(560,50);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#FF0000');
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized! ');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}