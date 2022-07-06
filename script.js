const grid = document.querySelector("#page div")

function setGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size*size; i++) {
        const gridDiv = document.createElement('div');
        gridDiv.textContent = 'D';
        gridDiv.classList.add('grid-element')
        grid.appendChild(gridDiv);
    }
}

setGrid(16);