const User = require('../models/User')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')
const sendEmail = require('../utlis/sendEmail') // Utility function to send emails
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient,GetCommand, ScanCommand,DeleteCommand ,PutCommand,UpdateCommand } = require('@aws-sdk/lib-dynamodb');

const S3_BUCKET = process.env.S3_BUCKET;

const s3 = new S3Client();
const client = new DynamoDBClient();
const docClient = DynamoDBDocumentClient.from(client);

const storage = multer.memoryStorage();
const upload = multer({ storage });

const getAllUsers = async (req, res) => {
  const users = await User.find({}).sort('createdAt')
  res.status(StatusCodes.OK).json({ users, count: users.length })
}


const register = async (req, res) => {

  upload.single('image')(req, res, async (err) => {
    if (err) {
        return res.status(500).json({ error: err.message });
    }

    try {
        const { userName, email, phone, address} = req.body;

        if (
            typeof userName !== 'string' ||
            typeof email !== 'string' ||
            typeof phone !== 'string' ||
            typeof address !== 'string'
        ) {
            console.error('Validation error:', req.body);
            return res.status(400).json({ error: 'attributes must be string' });
        }

        const userId = uuidv4();
        // unix time in milliseconds
        const timestamp = new Date().getTime();
        // const createdAtTimestamp = Number(createdAt);
        // const updatedAtTimestamp = Number(updatedAt);
        const imageName = `${userId}.jpg`;
        const imageUrl = `https://${S3_BUCKET}.s3.amazonaws.com/${imageName}`;

        // Upload image to S3
        await s3.send(new PutObjectCommand({
            Bucket: S3_BUCKET,
            Key: imageName,
            Body: req.file.buffer,
            ContentType: req.file.mimetype,
        }));

        // Save user to DynamoDB
        const params = {
            TableName: USER_TABLE,
            Item: {
                userId,
                userName,
                userRole,
                email,
                phone,
                address,
                imageUrl,
                neighborhood,
                servicesProvide,
                serviceRequired,
            },
        };

        const command = new PutCommand(params);
        await docClient.send(command);
        res.json({ id: userId, message: 'data saved successfully', imageUrl });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
});

  
  // our normal code for mongo db
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
  getAllUsers,
  resetPassword,
}
