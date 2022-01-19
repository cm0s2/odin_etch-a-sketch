const DRAW_AREA_SIZE = 480;

const canvas = document.querySelector('#canvas');
canvas.style.width = DRAW_AREA_SIZE + 'px';
canvas.style.height = DRAW_AREA_SIZE + 'px';



function changeColor(e) {
    e.target.style.backgroundColor = 'black';
}

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', createDrawingArea);

function createDrawingArea(size) {
    while (isNaN(size) || size === 0 || size === null) size = prompt('Enter grid size:', 10);

    // Reset container
    canvas.innerHTML = '';

    // Draw pixels
    for (let i = 0; i < size**2; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.width = DRAW_AREA_SIZE / size + 'px';
        pixel.style.height = DRAW_AREA_SIZE / size + 'px';
    
        pixel.addEventListener('mouseover', changeColor);
    
        canvas.appendChild(pixel);
        
    }
}

createDrawingArea(10);