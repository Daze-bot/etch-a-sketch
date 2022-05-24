let container = document.querySelector('#container');
let containerSideLength = 600;
container.style.height = `${containerSideLength}px`;
container.style.width = `${containerSideLength}px`;
let customGridBtn = document.querySelector('.customGrid');
let resetBtn = document.querySelector('.resetBtn');
let currentDimensions = document.querySelector('.currentGrid');
let currentColor = document.querySelector('.selection');
let blackBtn = document.querySelector('.blackBtn');
let rainbowBtn = document.querySelector('.rainbowBtn');
let grayscaleBtn = document.querySelector('.grayscaleBtn');
let eraser = document.querySelector('.eraser');
let clearBtn = document.querySelector('.clear');

customGridBtn.addEventListener('click', newGame);
resetBtn.addEventListener('click', resetGame);
clearBtn.addEventListener('click', clearGrid);

blackBtn.addEventListener('click', () => {
  currentColor.textContent = "Black";
  currentColor.style.color = "white";
  currentColor.style.background = "black";
});
rainbowBtn.addEventListener('click', () => {
  currentColor.textContent = "Rainbow";
  currentColor.style.color = "#5dfa65";
  currentColor.style.background = "#763491";
});
grayscaleBtn.addEventListener('click', () => {
  currentColor.textContent = "Grayscale";
  currentColor.style.color = "white";
  currentColor.style.background = "gray";
});
eraser.addEventListener('click', () => {
  currentColor.textContent = "Eraser";
  currentColor.style.color = "black";
  currentColor.style.background = "#fab5fa";
});

function newGame() {
  let userInput = +prompt("Select the number of squares per side", "16");
  if (userInput <= 100 && userInput > 0) {
    createGrid(userInput);
    currentDimensions.textContent = `${userInput}x${userInput}`;
  } else if (userInput === 0) {
    return;
  } else {
    alert("Please choose a value that is between 1 and 100");
  }
}

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
  if (currentColor.textContent === "Black") {
    this.style.background = "black"
  } else if (currentColor.textContent === "Rainbow") {
    this.style.background = "#" + Math.floor(Math.random()*16777215).toString(16);
  } else if (currentColor.textContent === "Grayscale") {
    this.style.background = "gray";
  } else if (currentColor.textContent === "Eraser") {
    this.style.background = "white";
  }
}

function clearGrid() {
  let gridSquares = container.querySelectorAll('div');
  gridSquares.forEach (gridSquare => gridSquare.style.background = "white")
}

function resetGame() {
  createGrid(16);
  currentDimensions.textContent = "16x16";
  currentColor.textContent = "Black";
  currentColor.style.color = "white";
  currentColor.style.background = "black";
}

// Default Size
createGrid(16);