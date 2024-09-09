const Job = require('../models/Job');
const { BadRequestError, NotFoundError } = require('../errors/index');
const {StatusCodes} = require('http-status-codes')


export const getAllJobs = async (req, res) => {
    const jobs = await Job.find({ }).sort('createdAt')
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length })
}
  

export const createJob = async (req, res) => { 
    try {
        req.body.houseOwnerId = req.user.userId;
        const job = await Job.create({...req.body});
        res.status(StatusCodes.CREATED).json({ job: job });
    }
    catch (err) {
        throw new BadRequestError("invalid job data")
    }
}


export const getJob = async (req, res) => {
    const jobId = req.params.jobId
  
    const job = await Job.findOne({
      _id: jobId,
    })
    if (!job) {
      throw new NotFoundError(`No job with id ${jobId}`)
    }
    res.status(StatusCodes.OK).json({ job })
}
  

export const findJob = async (req, res) => {
    const {
      query: { latitude, longitude },  // Get the latitude and longitude from the query params
    } = req;
  
    // Check if latitude and longitude are provided
    if (!latitude || !longitude) {
      throw new BadRequestError('Please provide latitude and longitude in the query params');
    }
  
    try {
      // Perform geospatial query to find jobs near the given location
      const jobs = await Job.aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [parseFloat(longitude), parseFloat(latitude)],
            },
            distanceField: 'distance',  // The calculated distance will be stored in this field
            spherical: true,  // Specify spherical geometry for Earth-like distances
          },
        },
        { $limit: 20 },  // Limit results, you can adjust based on your requirements
      ]);
  
      if (!jobs || jobs.length === 0) {
        throw new NotFoundError('No jobs found near the given location');
      }
  
      // Return the jobs sorted by proximity
      res.status(StatusCodes.ACCEPTED).json({ jobs });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };
  