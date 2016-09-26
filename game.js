var game= new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', {preload:preload, create:create, update:update});

var red, blue, ball,p1,p2;
var goals, goal, goal2;
var scoreP1=0, scoreP2=0;
var scoreText, scoreText2;

var player1 = prompt("Player 1's name?", "name");
var player2= prompt("Player 2's name?", "name");
var localStorage;
localStorage.setItem("player1Name", player1);
localStorage.setItem("player2Name", player2);




function preload(){
    game.load.image('red', 'assets/images/red_paddle.png');
    game.load.image('blue', 'assets/images/blue_paddle.png');
    game.load.image('ball', 'assets/images/ball.png');
    game.load.image('goal', 'assets/images/goal.png');
    game.load.image('goal2', 'assets/images/goal2.png');
    game.load.image('sky', 'assets/images/sky1.png');
}
function create(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
      
   
    game.add.sprite(0,0,'sky');
    
    goals= game.add.group();
    goals.enableBody= true;
    goal= goals.create(10,0,'goal'); //-35
    goal.enableBody= true;
    goal.body.immovable= true;
    
    goal2= goals.create(window.innerWidth-20,0,'goal2');
    goal2.enableBody= true;
    goal2.body.immovable= true;
    game.physics.enable(goal, Phaser.Physics.ARCADE);
    game.physics.enable(goal2, Phaser.Physics.ARCADE);
    //draw vector bitmap
    p1= game.add.bitmapData(28,104);
    p1.ctx.beginPath();
    p1.ctx.rect(0,0,28,104);
    p1.ctx.fillStyle="#ff0000";
    p1.ctx.fill();
    
    p2= game.add.bitmapData(28,104);
    p2.ctx.beginPath();
    p2.ctx.rect(0,0,28,104);
    p2.ctx.fillStyle="#0000ff";
    p2.ctx.fill();
    
    red=game.add.sprite(game.world.centerX-400, game.world.centerY,p1);
    game.physics.enable(red, Phaser.Physics.ARCADE);
    red.enableBody= true;
    red.body.immovable= true;
    red.body.collideWorldBounds= true;
    red.anchor.setTo(0.5,0.5);
    red.inputEnabled= true;
    red.input.enableDrag(true);
    
    blue= game.add.sprite(game.world.centerX+300, game.world.centerY, p2);
    game.physics.enable(blue, Phaser.Physics.ARCADE);
    blue.enableBody= true;
    blue.body.immovable= true;
    blue.body.collideWorldBounds= true;
    blue.anchor.setTo(0.5,0.5);
    blue.inputEnabled= true;
    blue.input.enableDrag(true);
    
    
    ball= game.add.sprite(game.world.centerX, game.world.centerY, 'ball');
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.enableBody= true;
    
    ball.body.collideWorldBounds= true;
    ball.body.velocity.setTo(300,300);
    ball.body.bounce.set(1);
    
    scoreText = game.add.text(0, 0, localStorage.getItem("player1Name")+ ": 0", {font: "bold 32px Arial", fill: "#fff"});
    scoreText2= game.add.text(600,0, localStorage.getItem("player2Name")+ ": 0", {font: "bold 32px Arial", fill: "#fff"});
   
  
    
    
}
function update(){
    game.physics.arcade.collide(blue,ball);
    game.physics.arcade.collide(red,ball);
    game.physics.arcade.collide(ball,goal, scoringP2);
    game.physics.arcade.collide(ball, goal2, scoringP1);
}
function scoringP1(){
    scoreP1+=1;
    scoreText.text= localStorage.getItem("player1Name")+ ': '+ scoreP1;
   
}
function scoringP2(){
    scoreP2+=1;
    scoreText2.text= localStorage.getItem("player2Name")+ ": "+ scoreP2;
}
