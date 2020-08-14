var paddle;
var ball;
var bubble = [];
var ball_test;
var edges;
var backgroundImg;
var ballimg1,ballimg2,ballimg3,ballimg4;
var score = 0;
function preload(){
	backgroundImg = loadImage("backgroud.jpg");
	ballimg1 = loadImage("silver ball.png");
	ballimg2 = loadImage("ball green.png");
	ballimg3 = loadImage("ball pink.png");
	ballimg4 = loadImage("ball red.png");
}

function setup() {
	createCanvas(1000, 980);
	//Create object for paddle.
	paddle = new Paddle(400,900,150,30);

	//create object for ball.
	//ball = new Ball(450,885,30);
	ball_test = createSprite(450,885,30,30);
	
	//create object for bubble

	//bubble = new Bubble(400,200,80);
	for(var k = 0; k<=width; k = k+80){
		bubble.push(new Bubble(k,height-1800/2,60,2000));
	  }

	  for(var k = 0; k<=width; k = k+70){
		bubble.push(new Bubble(k,height-1600/2,60,1300));
	  }

	  for(var k = 0; k<=width; k = k+80){
		bubble.push(new Bubble(k,height-1400/2,60,1300));
	  }

	  for(var k = 0; k<=width; k = k+70){
		bubble.push(new Bubble(k,height-1200/2,60,1300));
	  }

	 // if(ball_test.bounceOff(bubble)){
		score += 20
	//  }

	edges = createEdgeSprites();
	
}


function draw() {
  background(backgroundImg);
	
	

	paddle.display();
	paddle.movePaddle();
	//ball.display();
//	ball.bounceBall();
	fill("blue");
	//bubble.display();
	for (var j = 0; j < bubble.length; j++) {
   
		bubble[j].display();
	  }

	if(keyDown("space")){
		ball_test.velocityX = 10;
		ball_test.velocityY = -10;
	}

	ball_test.bounceOff(edges[0]);
	ball_test.bounceOff(edges[1]);
	ball_test.bounceOff(edges[2]);
	ball_test.bounceOff(edges[3]);
	//ball_test.bounceOff(paddle);
	//ball_test.bounceOff(bubble);

	/*if(ball_test.collide(paddle)){
		ball_test.velocityX = 0;
		ball_test.velocityY = 0;
	}*/

	textSize(40);
	text("Score" + score,50,50);

	drawSprites();



}



