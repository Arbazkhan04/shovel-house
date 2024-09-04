const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  neighbourHood:{
    type: String,
    required: [true, 'Please provide neighbourhood'],
  },
  servicesProvide:{
    type:[String],
    required: [true, 'Please provide services'],
  },
  userName: {
    type: String,
    required: [true, 'Please provide userName'],
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number'],
  },
  Address: {
    type: String,
    required: [true, 'Please provide address'],
  },
  // privilege: {
  //   type: String,
  //   enum: ['Homeowner', 'Shoveler'],
  // },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minlength: 8,
  },
})

UserSchema.pre('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  )
}

UserSchema.methods.comparePassword = async function (canditatePassword) {
  const isMatch = await bcrypt.compare(canditatePassword, this.password)
  return isMatch
}

module.exports = mongoose.model('User', UserSchema)
