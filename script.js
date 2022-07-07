const grid = document.querySelector("#page div")

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
            grid.appendChild(gridDiv);
            
            
        }
    }
}

setGrid(16);