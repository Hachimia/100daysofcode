/*Type effect on hero-header-legend*/
var i = 0;
var txt = "Welcome on my website";
var speed = 75;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero-header-legend").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;