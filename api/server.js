const express   = require('express');
const app       = express();
const http      = require('http');
require('dotenv').config();

const server = _port => http.createServer(app).listen(_port);
server(process.env.PORT || 4000);

const appJS = require('./app');

appJS(app);

module.exports = server;
