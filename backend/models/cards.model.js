const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cardSchema = new Schema(
    {
      name: {
        type: String,
        minLength: 1
      },
      gender: {
        type: String,
        minLength: 1
      },
      category: {
        type: String,
        minLength: 1
      },
      city: {
        type: String,
        minLength: 1
      },
      email: {
        type: String,
        minLength: 1
      },
      remark: {
        type: String,
        minLength: 1
      },
    },
    {
      timestamps: true
    }
  )
  
  const card = mongoose.model('Card', cardSchema)
  
  module.exports = card