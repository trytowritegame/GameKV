var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var background = new Image();
var wolf = new Image();

background.src = "img/back.jpg";
wolf.src = "img/wolf.png";

w = 1400;
h = 600;

x = 100;

wolfs = [];

wolfsDirection = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0]
];


function checkNewCoordForWolfs(x, y) {
    if (x < 0 || x >= 15 || y < 0 || y >= 9) {
        return false;
    }
    for (var i = 0; i < wolfs.length; i++) {
        if (wolfs[i].x == x && wolfs[i].y == y) {
            return false;
        }
    }
    return true;
}

function wolfsInit() {
    var x = 0;
    var y = 0;
    for (var i = 0; i < 10; i++) {
        do {
            x = Math.floor(Math.random() * 15);
            y = Math.floor(Math.random() * 9);
        } while(!checkNewCoordForWolfs(x,y));
        wolfs.push({
            x: x,
            y: y,
        });
    }
}

function wolfsMove() {
    var newX = 0;
    var newY = 0;
    for (var i = 0; i < 10; i++) {
        do {
            var direction = wolfsDirection[Math.floor(Math.random() * 8)];
            newX = wolfs[i].x + direction[0];
            newY = wolfs[i].y + direction[1];
        } while(!checkNewCoordForWolfs(newX, newY));
        wolfs[i].x = newX;
        wolfs[i].y = newY;
    }
}

function drawBackground() {
    for (var i = 0; i < w; i += 140) {
        for (var j = 0; j < h; j += 140) {
            ctx.drawImage(background, i, j);
        }
    }
}

function draw() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,w,h);
    drawBackground();
    ctx.fillStyle = "#00008b";
    wolfsMove();
    for (var i = 0; i < 10; i++) {
        ctx.drawImage(wolf, 25, 25, 80, 60, wolfs[i].x * 80, wolfs[i].y * 60, 80, 60);
    }
}

function step() {
    draw();
    setTimeout(function() {
        x += 100;
        requestAnimationFrame(step);
    }, 5000);
}

wolfsInit();
step();

cvs.addEventListener("click", function(event) {
    for (var i = 0; i < 10; i++) {
        if (event.x >= wolfs[i].x * 80 && event.x <= (wolfs[i].x + 1) * 80 &&
            event.y >= wolfs[i].y * 60 && event.y <= (wolfs[i].y + 1) * 60) {
            confirm("Do u want to fight with wolf?");
        }
    }
}, false)