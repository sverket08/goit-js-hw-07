document.querySelector('#name-input').addEventListener('input', function(event) {
  const inputValue = event.target.value.trim();
  const outputElement = document.querySelector('#name-output');
  
  if (inputValue === '') {
      outputElement.textContent = 'Anonymous';
  } else {
      outputElement.textContent = inputValue;
  }
});
