const express   = require('express');
const router    = express.Router();
const passport  = require('passport');

module.exports = (app) => {
  app.use('/', router);
};