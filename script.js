const body = document.querySelector('body');

const container = document.querySelector('div.container');
const gridBtn = document.querySelector('a.btn-mk-grid');
const xInput = document.querySelector('input.x-input');
const yInput = document.querySelector('input.y-input');
const rainbowBtn = document.querySelector('a.btn-go-rainbow');
const shadingBtn = document.querySelector('a.btn-shading');


rainbowBtn.addEventListener('click', goRainbow);
gridBtn.addEventListener('click', makeGrid);
shadingBtn.addEventListener('click', goShading);

// let penColor = document.querySelector('input.pen').value;
// let bgColor = document.querySelector('input.bg-color-pick').value;
let shading = false
let rainbow = false
let rainbowCounter = 0


let allPenRainbow = ["#56eda8", "#00e7c4", "#00dfe1", "#00d5fa", "#00c9ff",
"#00bbff", "#15a9ff", "#7d95ff", "#ad7fe9", "#cb68c7", "#ad7fe9", "#7d95ff",
"#15a9ff", "#00bbff", "#00c9ff", "#00d5fa", "#00dfe1", "#00e7c4",];

let allBgRainbow = ["#a9e7cb", "#99e5d7", "#8fe2e3", "#8cddee", "#91d7f5",
"#9dd1f8", "#adc9f7", "#bec1f1", "#cdb9e7", "#dab2d9", "#cdb9e7", "#bec1f1",
"#adc9f7", "#9dd1f8", "#91d7f5", "#8cddee", "#8fe2e3", "#99e5d7"]

makeGrid();


function getPenColor() {
    if (rainbow) {
        let penColor = allPenRainbow[rainbowCounter];
        if (rainbowCounter == 17) {
            rainbowCounter = 0;
        } else {rainbowCounter++;}
        return penColor
    } else {
        let penColor = document.querySelector('input.pen').value;
        return penColor;
    }
}

function getBgColor() {
    if (rainbow) {
        let bgColor = allBgRainbow[Math.floor(Math.random() * allBgRainbow.length)];
        return bgColor;
    } else {
        let bgColor = document.querySelector('input.bg-color-pick').value;
        return bgColor;
    }
}

function getX() {
    let x = xInput.value;
    if (x > 100) {
        x = 100;
    }
    return x;
}

function getY() {
    let y = yInput.value;
    if (y > 100) {
        y = 100;
    }
    return y;
}

function goShading() {
    if (shading == false) {
        shading = true;
        shadingBtn.classList.add('shading')
    } else {
        shading =false;
        shadingBtn.classList.remove('shading');
    }
}

function goRainbow() {
    if (rainbow == false) {
        rainbow = true;
        rainbowBtn.classList.add('rainbow');
    } else {
        rainbow = false;
        rainbowBtn.classList.remove('rainbow');
    }
}

function changeColor(e) {
    if (shading === true) {
        if (!(e.target.style.cssText.includes('filter'))) {
            e.target.style.cssText += "filter: brightness(.90)";
            console.log(e.target.style.cssText);
        } else {
            const css = e.target.style.cssText
            let newValue = Number(css.split("(0.").pop().split(")").shift())-1
            let tempCSS = css.split("s(0").shift()
            let newCSS = tempCSS + 's(0.' + newValue + ");"
            e.target.style.cssText = newCSS
        }
    } else {
        e.target.style.backgroundColor = getPenColor();
    }
}

function makeGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }

    const xArray = [];
    const yArray = [];
    let x = getX();
    let y = getY();
 
    for (let i = 0; i < x; i++) {
        xArray.push(i);
    }
    for (let j = 0; j < y; j++) {
        yArray.push(j);
    }

    yArray.forEach(() => {
        const yDiv = document.createElement('div');
        yDiv.classList.add('y-div')
        container.appendChild(yDiv);
        xArray.forEach(() => {
            const gridDiv = document.createElement('div');
            gridDiv.classList.add('grid-div');
            gridDiv.style.backgroundColor = getBgColor();
            gridDiv.addEventListener('mouseover', changeColor);
            yDiv.appendChild(gridDiv);            
        })
        })
    }

    