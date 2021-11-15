
function prelode(){

}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(525,259); 
    capture = createCapture(VIDEO);
    capture.size(500,400);
    capture.position(15,155);

    poseNet=ml5.poseNet(capture,modelLoded);
    poseNet.on('pose',gotPoses);
}
function draw(){ 

}
function modelLoded(){
    console.log("PoseNet Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
function sub(){
    var name=document.getElementById("mm").value;
    text(name,1000,1000);
}