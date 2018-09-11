// Open nav dropdown when hamburger menu is clicked
document.getElementById('nav-menu').onclick = function() {
  document.getElementById('nav-dropdown').style.display = "flex";
  document.getElementById('nav-menu').style.display = "none";
  document.getElementById('close-nav').style.display = "flex";
}

// Close nav dropdown when x is clicked
document.getElementById('close-nav').onclick = function() {
  document.getElementById('nav-dropdown').style.display = "none";
  document.getElementById('close-nav').style.display = "none";
  document.getElementById('nav-menu').style.display = "flex";
}

// Open gallery droplist when gallery is clicked
document.getElementById('drop').onclick = function() {
  document.getElementById('drop-list').style.display = "flex";
  document.getElementById('gallery').style.display = "none";
}

// Shrink navbar when user scrolls
window.onscroll = function() {
  var nav = document.getElementById('nav');
  var gal = document.getElementById('gallery-dropdown');
  var drop = document.getElementById('gallery-dropdown-list');
  if ( window.pageYOffset > 100 ) {
    nav.style.height = "7rem";
    gal.onmouseover = function() {
      drop.style.animation = "0.3s dropdown-scroll forwards";
    }
  } else {
    nav.style.height = "12rem";
    gal.onmouseover = function() {
      drop.style.animation = "0.3s dropdown forwards";
    }
  }
}