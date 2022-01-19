const DRAW_AREA_SIZE = 480;
let pixels = 3;


const container = document.querySelector('#container');
container.style.width = DRAW_AREA_SIZE + 'px';
container.style.height = DRAW_AREA_SIZE + 'px';

for (let i = 0; i < pixels**2; i++) {
    const pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.width = DRAW_AREA_SIZE / pixels + 'px';
    pixel.style.height = DRAW_AREA_SIZE / pixels + 'px';

    pixel.addEventListener('mouseover', changeColor);

    container.appendChild(pixel);
    
}

function changeColor(e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'black';
}