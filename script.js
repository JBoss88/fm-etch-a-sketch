'use strict';

const container = document.getElementById('gridContainer');
const btn = document.querySelector('button');

for (let i = 0; i < 2 * 2; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.append(box);
}

const createColor = () => {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

container.addEventListener('mouseover', e => {
  const clicked = e.target.closest('.box');
  if (!clicked) return;
  clicked.style.backgroundColor = createColor();
});

const getAlertInput = () => {
  const gridSize = +prompt('How many squares per side would you like?');
  const containerHeight = container.clientHeight;
  const containerWidth = container.clientWidth;

  const calcGrid = () => {
    let newBox = document.createElement('div');
    newBox.classList.add('new-box');
    let newHeight = containerHeight / gridSize / 10;
    let newWidth = containerWidth / gridSize / 10;

    newBox.style.height = `${newHeight}rem`;
    newBox.style.width = `${newWidth}rem`;
    container.append(newBox);
  };

  if (gridSize <= 100) {
    container.innerHTML = '';
    for (let j = 0; j < gridSize * gridSize; j++) {
      calcGrid();
    }
  }
};
btn.addEventListener('click', getAlertInput);

container.addEventListener('mouseover', e => {
  const clicked = e.target.closest('.new-box');
  if (!clicked) return;
  clicked.style.backgroundColor = createColor();
});
