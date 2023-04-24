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


var header = document.getElementById("barResponsive");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}



var select = function(s) {
  return document.querySelector(s);
}

function randomBetween(min,max)
{
    var number = Math.floor(Math.random()*(max-min+1)+min);
  
    if ( number !== 0 ){
      return number;
    }else {
      return 0.5;
    }
}

var tl = new TimelineMax();

for(var i = 0; i < 20; i++){

  var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
    x: randomBetween(12, 15) * (randomBetween(-1, 1)),
    y: randomBetween(12, 15) * (randomBetween(-1, 1)), 
    repeat:-1,
    repeatDelay:randomBetween(0.2, 0.5),
    yoyo:true,
    ease:Elastic.easeOut.config(1, 0.5)
  })

  tl.add(t, (i+1)/0.6)
}

tl.seek(50);

