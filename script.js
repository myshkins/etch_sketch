const body = document.querySelector('body');

const container = document.querySelector('div.container')
const button = document.querySelector('button.btn-mk-grid')
const xInput = document.querySelector('input.x-input')
const yInput = document.querySelector('input.y-input')

button.addEventListener('click', makeGrid)

function getX () {
    let x = xInput.value;
    return x;
}

function getY () {
    let y = yInput.value;
    return y;
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
            yDiv.appendChild(gridDiv);
        })
    })
}