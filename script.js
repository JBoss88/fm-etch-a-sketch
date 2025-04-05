'use strict';

const container = document.getElementById('gridContainer');
const clickMe = document.querySelector('.clickMe');

for (let i = 0; i < 16 * 16; i++) {
  let box = document.createElement('div');
  box.classList.add('box');
  container.append(box);
}

container.addEventListener('mouseover', e => {
  const clicked = e.target.closest('.box');
  if (!clicked) return;
  clicked.style.backgroundColor = 'green';
});

const getAlertInput = () => {
  const gridSize = +prompt('How many squares per side would you like?');

  if (gridSize === null) {
    return;
  } else if (gridSize <= 100) {
    container.innerHTML = '';
    for (let j = 0; j < gridSize * gridSize; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      container.append(box);
    }
  }
};

clickMe.addEventListener('click', getAlertInput);
