var text = "Hii, Soorya Here "; // Replace with your own text
var index = 0;
var speed = 100; // Replace with your own speed (in milliseconds)

function typeWriter() {
  var cursor = document.getElementById("cursor");
  var typedText = document.getElementById("typed-text");

  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  } else {
    // cursor.style.display = "none";
    index = 0;
    typedText.innerHTML="";
    setTimeout(typeWriter, speed);
  }
}

setTimeout(typeWriter, speed);

const sd = document.getElementById('sp');

sd.innerHTML = new Date().getFullYear();