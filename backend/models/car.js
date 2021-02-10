const mongoose = require('mongoose')

const telsaSchema = new mongoose.Schema({
  model: { type: String},
  // model: { type: String, required: true },
  // battery: { type: String },
  // range: { type: String },
})

const Tesla = mongoose.model('Tesla', teslaSchema)

module.exports = Tesla
