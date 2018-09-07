const express = require('express');
const router = express.Router();

// Family Page
router.get('/family', (req, res) => {
  res.render('gallery/family');
});

// Couples Page
router.get('/couples', (req, res) => {
  res.render('gallery/couples');
});

// Portraits Page
router.get('/portraits', (req, res) => {
  res.render('gallery/portraits');
});

// Kids Page
router.get('/kids', (req, res) => {
  res.render('gallery/kids');
});

// Babies Page
router.get('/babies', (req, res) => {
  res.render('gallery/babies');
});

module.exports = router;