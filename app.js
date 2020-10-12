const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');

canvas.width=470;
canvas.height=580;

ctx.strokeStyle="##2c2c2c";
ctx.lineWidth=2.5;

let painting = false;

function stopPainting() {
    painting = false; 
}

function startPainting(){
    painting = true;
}

function onMouseMove(event) {
    const y = event.offsetY;
    const x = event.offsetX;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke(); // <- this one changes color
    }
}

function onMouseDown(event) {
    painting = true;
}


if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}