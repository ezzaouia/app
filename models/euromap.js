'use strict'

const
  mongoose = require('mongoose')

let euromapSchema = {
  name: {
    type: String,
    required: true
  },
  longitude: {
    type: Number
  },
  latitude: {
    type: Number
  }
}

module.exports = euromapSchema
module.exports = new mongoose.Schema(euromapSchema)