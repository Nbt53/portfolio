///////// selectors/////////////

const canvas = document.querySelector("canvas")
const container = document.querySelector(".pad-body")
const selectBtn = document.querySelectorAll(".btn-select")
const selectColor = document.querySelectorAll(".color")

const ctx = canvas.getContext('2d');



////////////// options ////////////////////////
let drawStyle = "draw";
let isDrawing = false;
ctx.fillStyle = 'black';


/////variables//////
let prevX, prevY;

//////////resize canvas///////////

canvas.width = container.clientWidth; /* Set the canvas width to its computed width */
canvas.height = container.clientHeight; /* Set the canvas height to its computed height */

///////////////////get mouse pos//////////
let offset = $("canvas").offset();
let currentMousePos = { x: -1, y: -1 };

$(".pad-canvas").on("mousemove touchstart", () => {
    const rect = canvas.getBoundingClientRect();
    let touch = event.touches && event.touches.length ? event.touches[0] : null;
    currentMousePos.x = event.clientX - rect.left;
    currentMousePos.y = event.clientY - rect.top;
})

/// Select style////////////
//style//
const selectStyle = () => {
    drawStyle = event.target.id;
}

for (i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener("click", selectStyle);
}
///color///
const displayColor = () => {
    ctx.fillStyle = event.target.id;
    console.log('here')
}

for (i = 0; i < selectColor.length; i++) {
    selectColor[i].addEventListener("click", displayColor);
    selectColor[i].style.backgroundColor = selectColor[i].id;
}


////////////turn drawing on/off ////////////////////////
$("canvas").on("mousedown touchstart", () => {
    event.preventDefault();
    isDrawing = true;
    lastX = event.clientX - canvas.offsetLeft;
    lastY = event.clientY - canvas.offsetTop;
});

$("body").on("mouseup touchend", () => {
    event.preventDefault();
    isDrawing = false;
    prevX = null;
    prevY = null;
});

///////DRAW!!!////////
addEventListener('mousemove', () => {

    console.log("here")
    if (isDrawing) {
        if (drawStyle === 'draw') {
            draw(currentMousePos.x, currentMousePos.y);
        } else if (drawStyle === 'drawAnchored') {
            drawAnchored(currentMousePos.x, currentMousePos.y, lastX, lastY);
        }

    }
})

addEventListener('touchmove', (e) => {
    if (isDrawing) {
        if (drawStyle === 'draw') {
            draw(currentMousePos.x, currentMousePos.y);
        } else if (drawStyle === 'drawAnchored') {
            drawAnchored(currentMousePos.x, currentMousePos.y, lastX, lastY);
        }

    }
})

///////////free Draw function/////////////////
const draw = (x, y) => {
    event.preventDefault();
    ctx.strokeStyle = ctx.fillStyle;
    if (prevX != null && prevY != null) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    prevX = x;
    prevY = y;
};

//////////////////////weird pattern///////////
const drawAnchored = (x1, y1, x2, y2) => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

///////////rectangle/////////

/////////////////clear canvas////////////////
const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
$(".btn-clear").click(() => {
    clearCanvas();
})
