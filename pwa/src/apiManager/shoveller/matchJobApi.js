import api from '../api';

export const getAllJobs = async () => {
    const res = await api.get('/getAllJobs');
    return res.data.jobs;
}

export const updateJobStatus = async (jobId, shovellerId,decision) => {
    const res = await api.post('/updateJobStatusForShovellerAcceptedJob', { jobId,shovellerId,decision });
    return res.data;
}


export const getAppliedJobs = async (shovellerId) => {
    const res = await api.get(`/getJobsInWhichShovllerApplied/${shovellerId}`);
    return res.data;
}