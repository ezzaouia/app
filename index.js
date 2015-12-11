'use strict'

const
  express = require('express'),
  app = express(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  config = require('./config'),
  mongoose = require('mongoose'),
  util = require('util'),
  wagner = require('wagner-core')


let allowCrossDomain = function (req, res, next) {
  res.append('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.append('Access-Control-Allow-Credentials', 'true');
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next()
}

app.use(allowCrossDomain)

require('./models/models')(wagner);
app.use('/api/v1', require('./api')(wagner));

app.use(express.static(__dirname + '/clientNG'))

server.listen(config.port)
util.log('listening on port ' + config.port)