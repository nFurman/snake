
let dickRight = "https://media.discordapp.net/attachments/770525500077506560/1025514984534441995/jamTip.png";
let dickLeft = "https://media.discordapp.net/attachments/770525500077506560/1025514902091202650/jamTip.png";
let dickUp = "https://media.discordapp.net/attachments/770525500077506560/1025514847338762343/jamTip.png";
let dickDown = "https://media.discordapp.net/attachments/770525500077506560/1025514949197447238/jamTip.png";

let ballsRight = "https://media.discordapp.net/attachments/770525500077506560/1025527613906751559/balls.png?width=920&height=920";
let ballsLeft = "https://media.discordapp.net/attachments/770525500077506560/1025527716633641075/balls.png?width=920&height=920";
let ballsUp = "https://media.discordapp.net/attachments/770525500077506560/1025527647968690256/balls.png?width=920&height=920";
let ballsDown = "https://images.squarespace-cdn.com/content/v1/5b7c0a6f3c3a532fdb5671ad/3f1f44bf-ef7d-4290-8f9e-7f0c221d5525/RCT_Testicles.png";

let lr = "https://media.discordapp.net/attachments/770525500077506560/1025515847671873577/shaft.png";
let br = "https://media.discordapp.net/attachments/770525500077506560/1025515097692569671/turn.png";
let ar = "https://media.discordapp.net/attachments/770525500077506560/1025515151824265316/turn.png"
let al = "https://media.discordapp.net/attachments/770525500077506560/1025515187324858429/turn.png";

let lb = "https://media.discordapp.net/attachments/770525500077506560/1025515214554288148/turn.png";
let ab = "https://media.discordapp.net/attachments/770525500077506560/1025515786997084172/shaft.png";
let rl = "https://media.discordapp.net/attachments/770525500077506560/1025515739559506060/shaft.png";
let bl = "https://media.discordapp.net/attachments/770525500077506560/1025749640236253256/turn.png";
let rb = "https://media.discordapp.net/attachments/770525500077506560/1025749502155571212/turn.png";
let ra = "https://media.discordapp.net/attachments/770525500077506560/1025749575048376420/turn.png";
let la = "https://media.discordapp.net/attachments/770525500077506560/1025749604911820880/turn.png";
let ba = "https://media.discordapp.net/attachments/770525500077506560/1025515702016290886/shaft.png";

/*
let dickRight = "https://media.discordapp.net/attachments/770525500077506560/1027487313699295242/lizardHead.png?width=914&height=994";
let dickLeft = "https://media.discordapp.net/attachments/770525500077506560/1027487370754408469/lizardHead.png?width=914&height=994";
let dickUp = "https://media.discordapp.net/attachments/770525500077506560/1027487333446070273/lizardHead.png?width=1080&height=993";
let dickDown = "https://media.discordapp.net/attachments/770525500077506560/1027487217083494450/lizardHead.png?width=1080&height=993";

let ballsRight = "https://media.discordapp.net/attachments/770525500077506560/1027487489801322547/snakeTail.png?width=884&height=994";
let ballsLeft = "https://media.discordapp.net/attachments/770525500077506560/1027487544969019413/snakeTail.png?width=884&height=994";
let ballsUp = "https://media.discordapp.net/attachments/770525500077506560/1027487513549488138/snakeTail.png?width=1118&height=994";
let ballsDown = "https://media.discordapp.net/attachments/770525500077506560/1027487455429001296/snakeTail.png?width=1118&height=994";

let lr = "https://media.discordapp.net/attachments/770525500077506560/1027487426228277288/snakeBody.jpeg";
let br = "https://media.discordapp.net/attachments/770525500077506560/1027490396143628338/pipe.jpeg";
let ar = "https://media.discordapp.net/attachments/770525500077506560/1027490420260864020/pipe.jpeg"
let al = "https://media.discordapp.net/attachments/770525500077506560/1027490459200786462/pipe.jpeg";
let lb = "https://media.discordapp.net/attachments/770525500077506560/1027490476732981351/pipe.jpeg";
let ab = "https://media.discordapp.net/attachments/770525500077506560/1027487444444139520/snakeBody.jpeg";
let rl = lr;
let bl = lb;
let rb = br;
let ra = ar;
let la = al;
let ba = ab;

*/



let appleLink = "https://i.kym-cdn.com/photos/images/newsfeed/002/213/963/293.jpg";


let rowLength = 12;
let colLength = 12;
let startingLength = 4;
let speed = 1.5;
let snake = [0];
let currentSquare = 0;


let gridSize = rowLength * colLength;

let snakeLength = startingLength;
let highscore = snakeLength;
let apple;

let direction = "right";
let directionQueue = "";
let lastMove = "";


let gridSpaces = [...Array(gridSize).keys()];

let validSpaces = [];
let intervalID;
let gameStarted = false;

let replayButton = document.createElement('button');
replayButton.innerHTML = "pleay again?";
replayButton.className = "replay-button";
replayButton.addEventListener('click', replayGame);

let settingsButton = document.createElement('button');
settingsButton.innerHTML = "settings";
settingsButton.className = "settings-button";
settingsButton.addEventListener('click', settings);


/*
for(let i=0; i<144; i++){
    document.getElementById(".item")[i].innerHTML = i;
}
*/


startGame();



//set some stuff up
function startGame(){
    spawnGrid(rowLength, colLength);
    spawnApple();
    spawnDick();
}


function startInterval(){
    intervalID = setInterval(move, 100/speed);
}


function move(){
    switch(direction){
        case "down":
            if(currentSquare >= gridSize - rowLength){;death(); return;}
            currentSquare+=rowLength;
            lastMove = "down";
            break;
        case "up":
            if(currentSquare < rowLength){death(); return;}
            currentSquare-=rowLength;
            lastMove = "up";
            break;
        case "left":
            if(currentSquare % rowLength == 0){death(); return;}
            currentSquare--;
            lastMove = "left";
            break;
        case "right":
            if(currentSquare % rowLength == rowLength-1){death(); return;}
            currentSquare++;
            lastMove = "right";
            break;
    }

    //queues an input if it happens too fast
    if(directionQueue != ""){
        direction = directionQueue;
        directionQueue = "";
    }

    //checks if apple was collected
    let appleEaten = false;
    if(currentSquare == apple){
        snakeLength++;
        document.getElementById("length").innerHTML = `Length: ${snakeLength}`;
        appleEaten = true;
    }

    //unless an apple was collected, this deletes the end of the snake
    if(snake.length > snakeLength-1){
        let previousBalls = document.getElementById(snake[0]);
        previousBalls.removeChild(previousBalls.firstChild); 
        snake.shift();
        //deleting shaft to make balls
        let newBalls = document.getElementById(snake[0]);
        newBalls.removeChild(newBalls.firstChild);
        balls();
    }

    //checks for collision
    if(snake.includes(currentSquare)){
        console.log(currentSquare);
        console.log(snake);
        console.log("collision");
        death();
    }

    snake.push(currentSquare);
    
    if(appleEaten){generateApple();}

    //makes shaft
    if(snake.length > 2){
        shaft();
    }
    //makes dick
    dick();

    //deletes previous dick
    if(snake.length > 1){
        let previousDick = document.getElementById(snake[snake.length-2]);
        previousDick.removeChild(previousDick.firstChild);
    }   
}


//sets the variable direction to whichever key was pressed
//prevents snake from doubling back onto itself
//allows multiple keg presses between frames and has a queue
document.addEventListener('keydown', (event) => {
    switch(event.code){
        case "ArrowDown":
            if(lastMove != "up" && lastMove != "down"){
                direction = "down";
            }else if(direction != "down" && direction != "up"){directionQueue = "down";}
            if(!gameStarted){
                gameStarted = true;
                spawnBalls(ballsUp);
                startInterval();
            }
            break;
        case "ArrowUp":
            if(lastMove != "down" && lastMove != "up"){
                direction = "up";
            }else if(direction != "down" && direction != "up"){directionQueue = "up";}
            /*if(!gameStarted){
                gameStarted = true;
                spawnBalls(ballsDown);
                startInterval();
            }*/
            break;
        case "ArrowLeft":
            if(lastMove != "right" && lastMove != "left"){
                direction = "left";
            }else if(direction != "right" && direction != "left"){directionQueue = "left";}
            /*if(!gameStarted){
                gameStarted = true;
                spawnBalls(ballsRight);
                startInterval();
            }*/
            break;
        case "ArrowRight":
            if(lastMove != "left" && lastMove != "right"){
                direction = "right";
            }else if(direction != "left" && direction != "right"){directionQueue = "right";}
            if(!gameStarted){
                gameStarted = true;
                spawnBalls(ballsLeft);
                startInterval();
            }
            break;
    }
});

function replayGame(){
    let topDiv = document.getElementById("topDiv");
    topDiv.removeChild(topDiv.firstChild);
    for(let i of snake){
        let snakeLoc = document.getElementById(i);
        snakeLoc.removeChild(snakeLoc.firstChild);
    }
    let appleLoc = document.getElementById(apple);
    appleLoc.removeChild(appleLoc.firstChild);
    snake = [0];
    lastMove = "";
    currentSquare = 0;
    directionQueue = "";
    direction = "";
    snakeLength = startingLength;
    document.getElementById("length").innerHTML = `Length: ${snakeLength}`;
    spawnDick();
    spawnApple();
    gameStarted = false;
}

function death(){
    clearInterval(intervalID);
    let deathBox = document.createElement('div');
    deathBox.className = "death-box";
    deathBox.id = "deathBox"
    document.getElementById("topDiv").appendChild(deathBox);
    
    document.getElementById("deathBox").appendChild(settingsButton);
    let deathText = document.createElement('p');
    deathText.innerHTML = "LLLLLL BAd";
    deathText.className = "death-text";
    document.getElementById("deathBox").appendChild(deathText);
    document.getElementById("deathBox").appendChild(replayButton);
    if(snakeLength > highscore){
        highscore = snakeLength;
    }
    document.getElementById("highScore").innerHTML = `Best: ${highscore}`;
}

function generateApple(){
    validSpaces = gridSpaces.filter(x => !snake.includes(x));
    apple = validSpaces[Math.floor(Math.random() * (validSpaces.length))];
    document.getElementById(apple).appendChild(document.getElementById("appleID")); 
}

function spawnApple(){
    validSpaces = gridSpaces.filter(x => !snake.includes(x));
    apple = validSpaces[Math.floor(Math.random() * (validSpaces.length))];
    var appleImage = document.createElement('img');
    appleImage.src = appleLink;
    appleImage.className = "apple";
    appleImage.id = "appleID";
    document.getElementById(apple).appendChild(appleImage);
}

function spawnDick(){
    makeDick(dickRight);
}

function spawnBalls(direction){
    var ballsImage = document.createElement('img');
    ballsImage.src = direction;
    ballsImage.className = "balls";
    ballsImage.id = "ballsID";
    document.querySelector(".item").appendChild(ballsImage);
}

function spawnGrid(rows, cols){
    let gridContainer = document.getElementById("gridContainer");
    for(let i=0; i<rows*cols; i++){
        var item = document.createElement('div');
        item.className = "item";
        item.id = i;
        gridContainer.appendChild(item);
    }
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 50px)`;
    gridContainer.style.gridTemplateRows = `repeat(${rows}, 50px)`;
}

function settings(){
    console.log("test");
}


//edits the previous head to be a shaft img
function shaft(){
    let shaftToHead = snake[snake.length-1] - snake[snake.length-2];
    let shaftToShaft = snake[snake.length-3] - snake[snake.length-2];
    //shaft variables is how the program finds out the orientation of snake[snake.length-2]
    
    switch(shaftToHead){
        case 1: //head is to the right
            switch(shaftToShaft){
                case -1: //rest is to the left
                    makeShaft(lr);
                    break;
                case rowLength: //rest is below
                    makeShaft(br);
                    break;
                case -rowLength: //rest is above
                makeShaft(ar);
                    break;
            }
            break;
        case -1: //head is to the left
            switch(shaftToShaft){
                case 1: //rest is to the right
                    makeShaft(rl);
                    break;
                case rowLength: //rest is below
                    makeShaft(bl);
                    break;
                case -rowLength: //rest is above
                    makeShaft(al);
                    break;
            }
            break;
        case rowLength: //head is below
            switch(shaftToShaft){
                case 1: //rest is to the right
                    makeShaft(rb);
                    break;
                case -1: //rest is to the left
                    makeShaft(lb);
                    break;
                case -rowLength: //rest is above
                    makeShaft(ab);
                    break;
            }
            break;
        case -rowLength: //head is above
            switch(shaftToShaft){
                case 1: //rest is to the right
                    makeShaft(ra);
                    break;
                case -1: //rest is to the left
                    makeShaft(la);
                    break;
                case rowLength: //rest is below
                    makeShaft(ba);
                    break;
            }
            break;
    }
}

function dick(){
    switch(lastMove){
        case "up":
            makeDick(dickUp);
            break;
        case "down":
            makeDick(dickDown);
            break;
        case "right":
            makeDick(dickRight);
            break;
        case "left":
            makeDick(dickLeft);
            break;
    }
}

function balls(){
    switch(snake[0]-snake[1]){
        case -rowLength:
            makeBalls(ballsUp);
            break;
        case rowLength:
            makeBalls(ballsDown);
            break;
        case 1:
            makeBalls(ballsRight);
            break;
        case -1:
            makeBalls(ballsLeft);
            break;
    }
}

function makeDick(link){
    var dickImage = document.createElement('img');
    dickImage.src = link;
    dickImage.className = "dick";
    document.getElementById(currentSquare).appendChild(dickImage);
}

function makeShaft(link){
    var shaftImage = document.createElement('img');
    shaftImage.src = link;
    shaftImage.className = "shaft";
    document.getElementById(snake[snake.length-2]).appendChild(shaftImage);
}

function makeBalls(link){
    var ballsImage = document.createElement('img');
    ballsImage.src = link;
    ballsImage.className = "balls";
    document.getElementById(snake[0]).appendChild(ballsImage);
}