/* 
Author: Aazain Ullah Khan
Student ID: 301277063
File name: index.js
Date: 09/10/2023
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Aazain Ullah Khan' });
});

/* GET about page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/* GET projects page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
