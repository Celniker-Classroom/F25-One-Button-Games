new Q5();


//variables
let yPosition = 450;




function setup(){
    createCanvas(500, 500);
    frameRate(30);
}
function draw(){
    //write your sunrise code here
    // sky
    background(0, 190, 255);


    //sun
    fill('gold');
    circle(250, yPosition, 125);


    //grass
    fill('green');
    rect(0,375,500,300);


    if (yPosition > 100){
    yPosition -= 1; //sun rising
    }
}

