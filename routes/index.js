const express = require('express');
const router = express.Router();

// Index Page
router.get('/', (req, res) => {
  res.render('index');
});

// About Page
router.get('/about', (req, res) => {
  res.render('about');
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('contact');
});

// Booking Page
router.get('/booking', (req, res) => {
  res.render('booking');
});

// FAQ Page
router.get('/faq', (req, res) => {
  res.render('faq');
});

module.exports = router;