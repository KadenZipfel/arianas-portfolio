const express = require('express');
const router = express.Router();

// Family Page
router.get('/family', (req, res) => {
  res.render('family');
});

// Couples Page
router.get('/couples', (req, res) => {
  res.render('couples');
});

// Portraits Page
router.get('/portraits', (req, res) => {
  res.render('portraits');
});

// Kids Page
router.get('/kids', (req, res) => {
  res.render('kids');
});

// Babies Page
router.get('/babies', (req, res) => {
  res.render('babies');
});

module.exports = router;