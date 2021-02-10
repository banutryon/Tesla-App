const mongoose = require('mongoose')

const teslaSchema = new mongoose.Schema({
  models: [ {
  id: { type: String },
  model: { type: String, required: true },
  battery: { type: String },
  ETArange: { type: String },
  rangeId: { type: String },
  }
  ]
})

const Tesla = mongoose.model('Tesla', teslaSchema)

module.exports = Tesla
