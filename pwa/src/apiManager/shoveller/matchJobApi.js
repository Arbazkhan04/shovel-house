import api from '../api';

export const getAllJobs = async () => {
    const res = await api.get('/getAllJobs');
    return res.data.jobs;
}

export const updateJobStatus = async (jobId, shovellerId) => {
    const res = await api.post('/updateJobStatusForShovellerAcceptedJob', { jobId,shovellerId });
    return res.data;
}