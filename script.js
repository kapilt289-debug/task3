// greeting change
const greetBtn   = document.getElementById('greetBtn');
const nameInput  = document.getElementById('nameInput');
const greeting   = document.getElementById('greeting');

greetBtn.addEventListener('click', function () {
  const name = nameInput.value.trim();
  greeting.textContent = name ? 'Hello, ' + name : 'Hello';
});

// colour boxes: only one active at a time
const boxes = document.querySelectorAll('.box');

boxes.forEach(function (box) {
  box.addEventListener('click', function () {
  
    // add active only to clicked box
    this.classList.add('active');
  });
});
