///////// selectors/////////////

const canvas = document.querySelector("canvas");
const container = document.querySelector(".pad-body");
const selectBtn = document.querySelectorAll(".btn-select");
const selectColor = document.querySelectorAll(".color");

const ctx = canvas.getContext('2d');

////////////// options ////////////////////////
let drawStyle = "draw";
let isDrawing = false;
ctx.fillStyle = 'black';

/////variables//////
let lastX, lastY;

//////////resize canvas///////////

canvas.width = container.clientWidth; /* Set the canvas width to its computed width */
canvas.height = container.clientHeight; /* Set the canvas height to its computed height */

///////////////////get touch pos//////////
let currentTouchPos = { x: -1, y: -1 };

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    currentTouchPos.x = e.clientX - rect.left;
    currentTouchPos.y = e.clientY - rect.top;
});

canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    currentTouchPos.x = touch.clientX - rect.left;
    currentTouchPos.y = touch.clientY - rect.top;
});

/// Select style////////////
//style//
const selectStyle = (event) => {
    drawStyle = event.target.id;
};

selectBtn.forEach((button) => {
    button.addEventListener("click", selectStyle);
});

///color///
const displayColor = (event) => {
    ctx.fillStyle = event.target.id;
};

selectColor.forEach((color) => {
    color.addEventListener("click", displayColor);
    color.style.backgroundColor = color.id;
});

////////////turn drawing on/off ////////////////////////
canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDrawing = true;
    lastX = currentTouchPos.x;
    lastY = currentTouchPos.y;
});

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    lastX = touch.clientX - rect.left;
    lastY = touch.clientY - rect.top;
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    lastX = null;
    lastY = null;
});

canvas.addEventListener("touchend", () => {
    isDrawing = false;
    lastX = null;
    lastY = null;
});

///////DRAW!!!////////
const draw = (x, y) => {
    ctx.strokeStyle = ctx.fillStyle;
    if (lastX != null && lastY != null) {
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.closePath();
    }
    lastX = x;
    lastY = y;
};

canvas.addEventListener('mousemove', () => {
    if (isDrawing) {
        if (drawStyle === 'draw') {
            draw(currentTouchPos.x, currentTouchPos.y);
        } else if (drawStyle === 'drawAnchored') {
            drawAnchored(currentTouchPos.x, currentTouchPos.y, lastX, lastY);
        }
    }
});

canvas.addEventListener('touchmove', (e) => {
    if (isDrawing) {
        if (drawStyle === 'draw') {
            draw(currentTouchPos.x, currentTouchPos.y);
        } else if (drawStyle === 'drawAnchored') {
            drawAnchored(currentTouchPos.x, currentTouchPos.y, lastX, lastY);
        }
    }
});

///////////free Draw function/////////////////
const drawAnchored = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
};

/////////////////clear canvas////////////////
const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

document.querySelector(".btn-clear").addEventListener("click", () => {
    clearCanvas();
});