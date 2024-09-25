import api from '../api';

export const getAllJobs = async () => {
    const res = await api.get('/job/getAllJobs');
    return res.data.jobs;
}

export const updateJobStatus = async (jobId, shovellerId) => {
    const res = await api.post('/job/updateJobStatusForShovellerAcceptedJob', { jobId,shovellerId });
    return res.data;
}