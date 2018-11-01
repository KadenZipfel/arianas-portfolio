const express = require('express');
const router = express.Router();
const Image = require('../models/Image');

// Family Page
router.get('/family', (req, res) => {
  Image.find({}, (err, images) => {
    if(err) {
      return console.log(err);
    }
    res.render('family', {images: images});
  });
});

// Couples Page
router.get('/couples', (req, res) => {
  Image.find({}, (err, images) => {
    if(err) {
      return console.log(err);
    }
    res.render('couples', {images: images});
  });
});

// Portraits Page
router.get('/portraits', (req, res) => {
  Image.find({}, (err, images) => {
    if(err) {
      return console.log(err);
    }
    res.render('portraits', {images: images});
  });
});

// Kids Page
router.get('/kids', (req, res) => {
  Image.find({}, (err, images) => {
    if(err) {
      return console.log(err);
    }
    res.render('kids', {images: images});
  });
});

// Babies Page
router.get('/babies', (req, res) => {
  Image.find({}, (err, images) => {
    if(err) {
      return console.log(err);
    }
    res.render('babies', {images: images});
  });
});

module.exports = router;