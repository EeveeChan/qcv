var mouseEvent = "vazio";
var lastPositionX, lastPositionY;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


color = "black";
widthLine = 1;


canvas.addEventListener("mousedown", clicar);
function clicar(e) {
    //Addictonal Activity start
    //color = document.getElementById("color").value;
    //widthLine = document.getElementById("widthLine").value;
    //Addictonal Activity ends

    mouseEvent = "clicar";
}

canvas.addEventListener("mousemove", mover);
function mover(e) {
    PositionMouseX = e.clientX - canvas.offsetLeft;
    PositionMouseY = e.clientY - canvas.offsetTop;

    if (mouseEvent == "clicar") {
        ctx.beginPath();       
        ctx.moveTo(lastPositionX, lastPositionY); //início da linha ou ponto1
        ctx.lineTo(PositionMouseX, PositionMouseY);// final da linha ou ponto2
        ctx.stroke();


        console.log("Last position of x and y coordinates = ");
        console.log("x = " + lastPositionX + "y = " + lastPositionY)
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + PositionMouseX + "y = " + PositionMouseY);
    }

    lastPositionX = PositionMouseX;
    lastPositionY = PositionMouseY;
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseleave";
}


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
