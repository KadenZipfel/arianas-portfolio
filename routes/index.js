const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const keys = require('../keys');
const flash = require('connect-flash');

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

// FAQ Page
router.get('/faq', (req, res) => {
  res.render('faq');
});

module.exports = router;