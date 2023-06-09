document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});
document.addEventListener('DOMContentLoaded', function() {
    var noDragElements = document.querySelectorAll('.no-drag');

    for (var i = 0; i < noDragElements.length; i++) {
      noDragElements[i].addEventListener('dragstart', function(e) {
        e.preventDefault();
      });
    }
  });

var x = document.getElementById("fname");
var y = document.getElementById("lname");
let toggler="black";
function color_change() {
    x.style.color = toggler;
    y.style.color = "#f44336";
}
function original() {
    x.style.color = "#f44336";
    y.style.color = toggler;
}

var button = document.getElementById('mode');
var sheets = document.getElementById('styleSheet');
button.addEventListener("click", function () {
    if (sheets.getAttribute("href") === "style.css") {
        button.innerHTML = "dark_mode";
        sheets.setAttribute("href","dark.css");
        toggler="white";
        color_change();
        original();
    }
    else{
        button.innerHTML="light_mode";
        sheets.setAttribute("href","style.css");
        toggler="black";
        color_change();
        original();
    }
})
let Reload = document.getElementById("reload");
function rel(){
    location.reload();
}

