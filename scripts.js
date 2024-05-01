const cells = document.querySelector(".cells");
const btnSize = document.querySelector(".change_size_btn");
const btnClear = document.querySelector(".clear_btn");
const btnRGB = document.querySelector(".rgb_btn");

if (cells.hasChildNodes) {
  changeSizeCells(16);
}

function changeSizeCells(numberCells) {
  if (!cells.childNodes) {
    changeSizeCells(16);
  }

  for (let i = 0; i <= numberCells; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    cells.appendChild(row);

    for (let i = 0; i <= numberCells; i++) {
      const grid = document.createElement("div");
      grid.classList.add("box");
      row.appendChild(grid);
    }
  }
  readyPrint();
}

function rgbCells(numberCells) {
  if (!cells.childNodes) {
    changeSizeCells(16);
  }

  for (let i = 0; i <= numberCells; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    cells.appendChild(row);

    for (let i = 0; i <= numberCells; i++) {
      const grid = document.createElement("div");
      grid.classList.add("box");
      row.appendChild(grid);
    }
  }
  rainbowBrush();
}

function readyPrint() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "black";
    });
  });
}

function remove() {
  cells.innerHTML = "";
}

function clear() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "beige";
    readyPrint();
  });
}

btnClear.addEventListener("click", () => {
  clear();
});

btnSize.addEventListener("click", () => {
  const numberCells = prompt(
    "Insert the number of squares of the grid. MAX = 100; MIN = 16;"
  );

  if (numberCells > 100) {
    alert("The maximum number of rows is 100");
    return;
  } else if (numberCells < 16) {
    alert("The number must be greater than 16");
  } else {
    remove();
    changeSizeCells(numberCells);
  }
});

btnRGB.addEventListener("click", () => {
  rainbowBrush();
});

function rainbowBrush() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      hue = Math.floor(Math.random() * 360);
      saturation = 100;
      lightness = 50;
      box.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
  });
}
