const mongoose = require('mongoose')

const teslaSchema = new mongoose.Schema({
  // models: [ {
  // id: { type: String },
  // model: { type: String },
  // battery: { type: String },
  // ETArange: { type: String },
  // configId: { type: String },
  // }
  // ],
 
  config: [{
    battery: {type: String},
    
    19: {
      On: {
        speed: {
          40: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          50: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          55: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          60: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          65: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          70: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
        },
      },
      Off: {
        speed: {
          40: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          50: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          55: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          60: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          65: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          70: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
        },
      },
    },
    21: {
      On: {
        speed: {
          40: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          50: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          55: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          60: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          65: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          70: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
        },
      },
      Off: {
        speed: {
          40: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          50: { 
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          55: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          60: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          65: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
          70: {
            20: { type: String },
            32: { type: String },
            45: { type: String },
            68: { type: String },
            85: { type: String },
            105: { type: String },
          },
        },
      },
    },
  },

],
  
})

const Tesla = mongoose.model('Tesla', teslaSchema)

module.exports = Tesla



