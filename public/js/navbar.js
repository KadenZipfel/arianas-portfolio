// Open nav dropdown when hamburger menu is clicked
document.getElementById('nav-menu').onclick = function() {
  document.getElementById('nav-dropdown').style.display = "flex";
}

// Close nav dropdown when x is clicked
document.getElementById('close-nav').onclick = function() {
  document.getElementById('nav-dropdown').style.display = "none";
}

// Close nav dropdown when anything is clicked
document.getElementById('nav-dropdown').onclick = function() {
  document.getElementById('nav-dropdown').style.display = "none";
}

// Shrink navbar when user scrolls
window.onscroll = function() {
  var nav = document.getElementById('nav');
  if ( window.pageYOffset > 100 ) {
    nav.style.height = "7rem";
  } else {
    nav.style.height = "12rem";
  }
}