const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({

  userRole: {
    type: String,
    enum: ['admin', 'shoveller', 'houseOwner'],
    required: true
  },
  userName: {
    type: String,
    required: function() { return this.userRole !== 'admin'; }  // Required for shoveller and houseOwner
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: function() { return this.userRole !== 'admin'; }  // Required for shoveller and houseOwner
  },
  address: {
    type: String,
    required: function() { return this.userRole !== 'admin'; }  // Required for shoveller and houseOwner
  },
  password: {
    type: String,
    required: true
  },
  neighbourhood: {
    type: String,
    required: function() { return this.userRole === 'shoveller'; },  // Required only for shovellers
    default: undefined //keep empty is not provided
  },
  servicesProvide: {
    type: [String],
    required: function() { return this.userRole === 'shoveller'; },  // Required only for shovellers
    default: undefined //keep empty is not provided
  },
  serviceRequired: {
    type: [String],
    required: function() { return this.userRole === 'houseOwner'; }, // Required only for houseOwners
    default: undefined //keep empty is not provided
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
