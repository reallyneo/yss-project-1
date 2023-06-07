function change_page() {
    window.location.href = "walk2.html"
}

function sad_page() {
    window.location.href = "sad.html"
}

function walk3() {
    window.location.href = "walk3.html"
}


var i = 0;
var txt = 'Hey!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

