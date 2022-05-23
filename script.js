let container = document.querySelector('#container');
let containerSideLength = 600;
container.style.height = `${containerSideLength}px`;
container.style.width = `${containerSideLength}px`;

function createGrid(num) {
  let squareSide = (containerSideLength / num) - 2;
  for (let i = 0; i < (num * num); i++) {
    let div = document.createElement('div');
    div.classList.add('gridDiv');
    div.style.height = `${squareSide}px`;
    div.style.width = `${squareSide}px`;
    container.appendChild(div);
  }
}

createGrid(16);
