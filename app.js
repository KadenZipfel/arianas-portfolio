const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// Index Page
app.get('/', (req, res) => {
  res.render('index');
});

// About Page
app.get('/about', (req, res) => {
  res.render('about');
});

// Contact Page
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Booking Page
app.get('/booking', (req, res) => {
  res.render('booking');
});

// Portfolio Routes
// ----------------

// Family Page
app.get('/family', (req, res) => {
  res.render('family');
});

// Headshots Page
app.get('/headshots', (req, res) => {
  res.render('headshots');
});

// Creative Page
app.get('/creative', (req, res) => {
  res.render('creative');
});

// Nature Page
app.get('/nature', (req, res) => {
  res.render('nature');
});

app.listen(PORT, () => {
    console.log('The server is running');
});