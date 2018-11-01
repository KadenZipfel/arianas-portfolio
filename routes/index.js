const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const keys = require('../keys');
const flash = require('connect-flash');
const Image = require('../models/Image');

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
  res.render('contact', {message: req.flash('success')});
});

// Contact Page Logic
router.post('/contact', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: !1,
    auth: {
      user: keys.google.user,
      pass: keys.google.pass
    }
  }),
  mailOptions = {
    from: '"Contact Form" <kadenzipfel@gmail.com>',
    to: 'arianaroche@gmail.com',
    subject: req.body.subject,
    text: req.body.message + ' From: ' + req.body.email
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) return console.log(error)
  }), req.flash('success', 'Message Sent! We will be in contact shortly.'), 
  res.redirect('back');
});

// Booking Page
router.get('/booking', (req, res) => {
  res.render('booking');
});

// Booking Form
router.get('/bookingform', (req, res) => {
  res.render('bookingform', {message: req.flash('success'), query: req.query});
});

// Booking Form Logic
router.post('/bookingform', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: !1,
    auth: {
      user: keys.google.user,
      pass: keys.google.pass
    }
  }),
  mailOptions = {
    from: '"Booking Form" <kadenzipfel@gmail.com>',
    to: 'arianaroche@gmail.com',
    subject: 'New booking form message',
    text: 
      `
      Name: ${req.body.name}, 
      Email: ${req.body.email}, 
      Phone: ${req.body.phone}, 
      How can I help capture your milestones: ${req.body.milestones}, 
      Session Type: ${req.body.session}, 
      How did you find out about me: ${req.body.how}`
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if(error) return console.log(error)
  }), req.flash('success', 'Message Sent! We will be in contact shortly.'), 
  res.redirect('back');
});

// FAQ Page
router.get('/faq', (req, res) => {
  res.render('faq');
});

// Post Page
router.get('/post', (req, res) => {
  res.render('post');
});

// Post Logic
router.post('/post', (req, res) => {
  if(req.body.secret == keys.secret) {
    Image.create({
      src: req.body.src,
      description: req.body.description,
      page: req.body.page
    }, (err, image) => {
      if(err) {
        console.log(err);
        return res.redirect('back');
      }
      image.save();
      console.log('Image saved: ', image);
      res.redirect('back');
    });
  }
});

module.exports = router;