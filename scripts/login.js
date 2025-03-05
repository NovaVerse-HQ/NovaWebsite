var i = 0;
var txt = 'Please select a login method';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("selectmethod").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()