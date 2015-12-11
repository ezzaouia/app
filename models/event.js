'use strict'

const
  mongoose = require('mongoose')

let eventSchema = {
  title: {
    type: String,
    required: true
  },
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  }
}

module.exports = eventSchema
module.exports = new mongoose.Schema(eventSchema)