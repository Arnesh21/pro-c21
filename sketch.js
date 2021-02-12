var canvas;
var music;

var box1, box2, box3, box4, ball;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    music.play();

    box1 = createSprite(90,585,180,30);
    box1.shapeColor = "Blue";
    box2 = createSprite(288,585,200,30);
    box2.shapeColor = "Orange";
    box3 = createSprite(496,585,200,30);
    box3.shapeColor = "Green";
    box4 = createSprite(695,585,185,30);
    box4.shapeColor = "Red";

    ball = createSprite(400,300,35,35);
    ball.velocityX = 3;
    ball.velocityY = 5;
    


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    
    edges=createEdgeSprites();

    if(ball.isTouching(box1)){
        ball.shapeColor = "Blue";
    }
    if(ball.isTouching(box2)){
        ball.shapeColor = "Orange";
    }
    if(ball.isTouching(box3)){
        ball.shapeColor = "Green";
    }
    if(ball.isTouching(box4)){
        ball.shapeColor = "Red";
    }
    if(ball.isTouching(box2)){
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    

    ball.bounceOff(edges);
    ball.bounceOff(box1);
    ball.bounceOff(box2);
    ball.bounceOff(box3);
    ball.bounceOff(box4);

  drawSprites();
  
    //add condition to check if box touching surface and make it box
}
