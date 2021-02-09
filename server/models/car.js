const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  battery: { type: String },
  range: { type: String },
})

const Tesla = mongoose.model('Tesla', carSchema)

module.exports = Tesla
