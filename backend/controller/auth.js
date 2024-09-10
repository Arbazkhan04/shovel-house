const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const sendEmail = require('../utlis/sendEmail') // Utility function to send emails

const register = async (req, res) => {
  try {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
  }
  catch (err) {
    throw new BadRequestError('Invalid User Data')
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }
  const user = await User.findOne({ email })
  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  const isPasswordCorrect = await user.comparePassword(password)
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError('Invalid Credentials')
  }
  // compare password
  const token = user.createJWT()
  res.status(StatusCodes.OK).json({ user: { name: user.name }, token })
}

const forgotPassword = async (req, res) => {
  const { email } = req.body

  const user = await User.findOne({ email })
  if (!user) {
    throw new BadRequestError('Email could not be sent')
  }

  // Generate and get reset password token
  const resetToken = user.getResetPasswordToken()

  // Save the user with the reset token and expiration time
  await user.save()

  // Create reset URL
  const resetUrl = `https://yourdomain.com/reset-password/${resetToken}`

  const message = `
    You requested a password reset. Please click on the link below to reset your password:
    ${resetUrl}
  `

  try {
    await sendEmail({
      to: user.email,
      subject: 'Password Reset Request',
      text: message,
    })

    res.status(StatusCodes.OK).json({ success: true, data: 'Email sent' })
  } catch (error) {
    user.resetPasswordToken = undefined
    user.resetPasswordExpire = undefined

    await user.save()

    throw new BadRequestError('Email could not be sent')
  }
}

const resetPassword = async (req, res) => {
  const resetPasswordToken = crypto.createHash('sha256').update(req.params.resetToken).digest('hex')

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  })

  if (!user) {
    throw new BadRequestError('Invalid or expired token')
  }

  // Set new password
  user.password = req.body.password
  user.resetPasswordToken = undefined
  user.resetPasswordExpire = undefined

  await user.save()

  res.status(StatusCodes.OK).json({ success: true, data: 'Password reset successful' })
}

module.exports = {
  register,
  login,
  forgotPassword,
}
