var i = 0;
var txt = 'Especialistas en gestionar procesos de transformación digital.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt[i];
    i++;
    setTimeout(typeWriter, speed);
  }
}