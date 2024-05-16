const typedText = document.getElementById('typed-text');
const text = "Yazerrr"; // Replace with your actual name

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typedText.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  } else {
    function blinkCursor() {
      typedText.style.opacity = (typedText.style.opacity === '0') ? '1' : '0';
    }

    setInterval(blinkCursor, 500); // Blinks every 500 milliseconds
  }
}

typeWriter();
