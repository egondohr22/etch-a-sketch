const grid = document.querySelector("#grid");
const clear = document.querySelector('#clearBtn');

clear.onclick = () => {
    grid.innerHTML = '';
    setGrid(60);
};

let ok = 0;
function setGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            const gridDiv = document.createElement('div');
            // gridDiv.textContent = 'D';
            gridDiv.classList.add('grid-element');
            if(j == 0) {
                gridDiv.classList.add('lborder');    
            }
            if(i == 0) {
                gridDiv.classList.add('uborder');
            }
            gridDiv.addEventListener('mousedown', changeColor)
            document.addEventListener('mouseup', () => ok = 0)
            gridDiv.addEventListener('mouseover', changeColor)
            grid.appendChild(gridDiv);
            
            
        }
    }
}

function changeColor(e) { 
    
    if(e.type == 'mousedown') ok = 1;
    if(e.type == 'mouseover' && !ok) return;
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

setGrid(60);