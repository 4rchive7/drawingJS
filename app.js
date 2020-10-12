const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");

canvas.width = 470;
canvas.height = 580;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;
ctx.fillStyle = "#000000";

let painting = false;
let filling = false;

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
}

console.log(Array.from(colors));
function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


function handleMode() {
    if(filling === true){
        filling = false;
        mode.innerHTML = "fill";
    }else{        
        filling = true;
        mode.innerHTML = "paint";
    }
   
}

function onMouseMove(event) {
    const y = event.offsetY;
    const x = event.offsetX;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke(); // <- this one changes color
    }
}

function onMouseDown(event) {
    painting = true;
}

function handleCanvasClick() {
    if (filling) {
        console.log("hit");
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
}

if (colors) {
    Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
}


if (range) {
    range.addEventListener("input", handleRangeChange);
}


if (mode) {
    mode.addEventListener("click", handleMode);
}