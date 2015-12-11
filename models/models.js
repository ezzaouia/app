'use strict'

const
  mongoose = require('mongoose'),
  _ = require('underscore'),
  config = require('../config'),
  assert = require('assert')


module.exports = function (wagner) {
  mongoose.connect(config.db_url)

  wagner.factory('db', function () {
    return mongoose
  })

  let Euromap = mongoose.model('Euromap', require('./euromap'), 'euromaps')
  let Event = mongoose.model('Event', require('./event'), 'events')


  let models = {
    Euromap: Euromap,
    Event: Event
  }

  // To ensure DRY - ness, register factories in a loop
  _.each(models, function (value, key) {
    wagner.factory(key, function () {
      return value
    })
  })

  return models
}