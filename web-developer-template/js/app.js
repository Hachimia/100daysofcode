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

/*Fade in effect on sections when we scroll on the bottom of the page*/
function Scroll (){
  var presentation = document.getElementById('presentation');
  var services = document.getElementById('services');
  var portfolio = document.getElementById('portfolio');
  var testimonials = document.getElementById('testimonials');
  var contact = document.getElementById('contact');
  var ypos = window.pageYOffset;

if(ypos < 255){
  presentation.style.opacity = "0";
}
else{
  presentation.style.opacity = "1";
  presentation.style.transition = "2s";
}

window.addEventListener('scroll', function(e){
  console.log(ypos);
});

}