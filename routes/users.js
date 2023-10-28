/* 
Author: Aazain Ullah Khan
Student ID: 301277063
File name: users.js
Date: 09/10/2023
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
