'use strict'

const
  bodyparser = require('body-parser'),
  express = require('express'),
  status = require('http-status'),
  _ = require('underscore')

module.exports = function (wagner) {
  var api = express.Router();

  api.use(bodyparser.json());

  api.get('/maps', wagner.invoke(function (Euromap) {
    return function (req, res) {
      Euromap.find({}, function (err, euromaps) {
        // if error return 501 & send err as string
        if (err) {
          res
            .status(status.INTERNAL_SERVER_ERROR)
            .json({
              error: err.toString()
            })
        }
        // if nothing exist send back not found
        if (!euromaps) {
          res
            .status(status.NOT_FOUND)
            .json({
              error: 'Not Found'
            })
        }
        // otherwise send 2 euromaps result
        res.json({
          euromaps: euromaps
        })
      })
    }
  }))

  api.get('/events', wagner.invoke(function (Event) {
    return function (req, res) {
      Event.find({}, function (err, events) {
        // if error return 501 & send err as string
        if (err) {
          res
            .status(status.INTERNAL_SERVER_ERROR)
            .json({
              error: err.toString()
            })
        }
        // if nothing exist send back not found
        if (!events) {
          res
            .status(status.NOT_FOUND)
            .json({
              error: 'Not Found'
            })
        }
        // otherwise send 2 events result
        res.json({
          events: events
        })
      })
    }
  }))

  return api
}