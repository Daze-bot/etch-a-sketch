let container = document.querySelector('#container');
let containerSideLength = 600;
let div;
container.style.height = `${containerSideLength}px`;
container.style.width = `${containerSideLength}px`;

function createGrid(num) {
  let squareSide = (containerSideLength / num) - 2;
  for (let i = 0; i < (num * num); i++) {
    div = document.createElement('div');
    div.classList.add('gridDiv');
    div.style.height = `${squareSide}px`;
    div.style.width = `${squareSide}px`;
    container.appendChild(div);
  }
  let gridSquares = container.querySelectorAll('div');
  gridSquares.forEach (gridSquare => gridSquare.addEventListener('mouseover', addColor));
}

function addColor() {
  this.style.background = 'black';
}




createGrid(24);
