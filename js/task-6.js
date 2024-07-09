const input = document.querySelector('input');

const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', createBoxes);

const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', destroyBoxes);


const boxesContainer = document.querySelector('#boxes');


function createBoxes() {
    const amount = parseInt(input.value);
    if (isNaN(amount) || amount < 1 || amount > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

      boxesContainer.innerHTML = '';

 
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${30 + i * 10}px`;
        box.style.height = `${30 + i * 10}px`;
        boxesContainer.appendChild(box);
    }

    input.value = '';
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}




