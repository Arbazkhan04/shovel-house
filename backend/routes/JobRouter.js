const express = require('express')
const router = express.Router()
const { createJob, getAllJobs, getJob, findJob } = require('../controller/Job-Controller')


router.get('/', getAllJobs).post('/', createJob).get('/:jobId', getJob).get('/find', findJob)

module.exports = router