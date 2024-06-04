const target = document.getElementById('animatedText');
const text = 'Improvrein.';
let index = 0;

function addLetter() {
  const span = document.createElement('span');
  span.textContent = text[index];
  span.className = 'blur-in';
  target.appendChild(span);
  
  index++;
  
  if (index < text.length) {
    setTimeout(addLetter, 80); // Adjust the timeout to control the speed of the typing
  }
}

addLetter(); // Start the animation