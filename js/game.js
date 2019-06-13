var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var topRightDecor = new Image();
var topLeftDecor = new Image();
var ricardo = new Image();

topLeftDecor.src = "img/jaw1.png";
topRightDecor.src = "img/topRightDecor.png";
ricardo.src = "img/ricardo.jpg";

function draw() {
    ctx.drawImage(topLeftDecor, 0, 0);
    ctx.drawImage(topRightDecor, 1009, 40);
    ctx.drawImage(ricardo, 450, 40);
    requestAnimationFrame(draw);
}

draw()
alert("Агаси чорт")