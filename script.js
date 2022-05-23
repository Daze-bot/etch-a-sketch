let container = document.querySelector('#container');
let containerSideLength = 600;
container.style.height = `${containerSideLength}px`;
container.style.width = `${containerSideLength}px`;
let customGridBtn = document.querySelector('.customGrid');

customGridBtn.addEventListener('click', () => {
  let userInput = +prompt("Select the number of squares per side", "16");
  console.log(userInput);
  if (userInput <= 100 && userInput > 0) {
    createGrid(userInput);
  } else if (userInput === 0) {
    return;
  } else {
    alert("Please choose a value that is between 1 and 100");
  }
});

function createGrid(num) {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  let squareSideLength = (containerSideLength / num) - 2;
  for (let i = 0; i < (num * num); i++) {
    let div = document.createElement('div');
    div.classList.add('gridDiv');
    div.style.height = `${squareSideLength}px`;
    div.style.width = `${squareSideLength}px`;
    container.appendChild(div);
  }
  let gridSquares = container.querySelectorAll('div');
  gridSquares.forEach (gridSquare => gridSquare.addEventListener('mouseover', addColor));
}

function addColor() {
  // Random color - ie. Rainbow
  this.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
}

// Default Size
createGrid(16);