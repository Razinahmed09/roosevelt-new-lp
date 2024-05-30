
document.addEventListener( 'DOMContentLoaded', function () {

    var splide = new Splide( '.splide', {
    type   : 'loop',
    perPage: 6,
    perMove: 1,
  } ).mount();
  
});

function openCity(e, t) {
  var o, n, s;
  for (o = 0, n = document.getElementsByClassName("tabcontent"); o < n.length; o++) n[o].style.display = "none";
  for (o = 0, s = document.getElementsByClassName("tablinks"); o < s.length; o++) s[o].className = s[o].className.replace(" active", "");
  (document.getElementById(t).style.display = "block"), (e.currentTarget.className += " active");
}