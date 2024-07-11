const input = document.querySelector('input');

const createButton = document.querySelector('[data-create]');
createButton.addEventListener('click', createBoxes);

const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', destroyBoxes);


const boxesContainer = document.querySelector('#boxes');

// функцая для рендеру елементів на сторінці
function createBoxes( ) {
    const amount = parseInt(input.value);//аналізує значення як рядок і повертає перше ціле число 

    if (isNaN(amount) || amount < 1 || amount > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

      boxesContainer.innerHTML = '';  // очищаємо код 

// вставляємо потрібну к - сть div
      const boxesHTML = Array.from({ length: amount }, (_, i) => {
        const width = 30 + i * 10;
        const height = 30 + i * 10;
        const backgroundColor = getRandomHexColor();
        return `<div style="background-color: ${backgroundColor}; width: ${width}px; height: ${height}px;"></div>`;
    }).join('');
  
    boxesContainer.insertAdjacentHTML('beforeend', boxesHTML);
   
    input.value = ''; // очищаємо поле вводу після створення блоків
}

// очищення коду після натискання на кнопку Destroy
function destroyBoxes() {
    boxesContainer.innerHTML = ' ';
  
    input.value = ''; // очищаємо поле вводу після знищення блоків
}

// функція  для отримання випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// БУЛО ВАЖКО 