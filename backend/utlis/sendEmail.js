// This file contains the code to send an email using nodemailer
const nodemailer = require('nodemailer')

const sendEmail = async ({ to, subject, text }) => {
  // Create a transporter object with your email service configuration
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Example: using Gmail as the email service
    auth: {
      user: process.env.EMAIL_USERNAME, // Your email address
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  })

  // Define the email options
  const mailOptions = {
    from: process.env.EMAIL_FROM, // Sender address
    to,                           // Receiver's email
    subject,                      // Subject of the email
    text,                         // Plain text body of the email
  }

  // Send the email
  await transporter.sendMail(mailOptions)
}

module.exports = sendEmail
