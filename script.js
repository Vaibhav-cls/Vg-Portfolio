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
let toggler="white";
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

// Function to initialize the slider position
function initializeSlider() {
    const activeTab = document.querySelector('.tab.active');
    const tabs = document.querySelectorAll('.tab');
    const tabIndex = Array.from(tabs).indexOf(activeTab); // Get the index of the active tab
    const tabSlider = document.querySelector('.tab-slider');

    // Set the slider's initial position
    tabSlider.style.left = `${tabIndex * 34}%`; // 25% for 4 tabs

    // Check if projects are visible for the default tab
    switchTab(tabIndex);
}

// Call the function when the page loads
window.onload = initializeSlider;


//function switchTab will switch between the tabs and if the id of the tab matches any of the classes of the project div then it will display them and hide rest of them
function switchTab(tabIndex) {
    const categories = ['all', 'frontend', 'backend', 'fullstack'];
    const selectedCategory = categories[tabIndex];

    // Get all projects and the message element
    const projects = document.getElementsByClassName('project');
    const noProjectsMessage = document.querySelector('.no-projects-message');

    let visibleProjects = 0; // Counter for visible projects

    // Update project visibility
    for (const project of projects) {
        if (selectedCategory === 'all' || project.classList.contains(selectedCategory)) {
            project.style.display = 'block';
            visibleProjects++; // Increment counter
        } else {
            project.style.display = 'none';
        }
    }

    // Show or hide the message based on visible projects
    if (visibleProjects === 0) {
        noProjectsMessage.style.display = 'block'; // Show message
    } else {
        noProjectsMessage.style.display = 'none'; // Hide message
    }

    // Update active tab
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach((tab, index) => {
        tab.classList.toggle('active', index === tabIndex);
    });

    // Move tab slider
    const tabSlider = document.querySelector('.tab-slider');
    tabSlider.style.left = `${tabIndex * 34}%`; // 25% for 4 tabs
}
