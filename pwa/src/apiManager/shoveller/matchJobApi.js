import api from '../api';

export const getAllJobs = async (page = 1, limit = 10) => {
    const res = await api.get(`/job/getAllJobs?page=${page}&limit=${limit}`);
    return res.data;
}

export const updateJobStatus = async (jobId, shovellerId,decision) => {
    const res = await api.post('/job/updateJobStatusForShovellerAcceptedJob', { jobId,shovellerId,decision });
    return res.data;
}


export const getAppliedJobs = async (shovellerId) => {
    const res = await api.get(`/job/getJobsInWhichShovllerApplied/${shovellerId}`);
    return res.data;
}

//find job based on latitude and logitude and send it to backend as a query
export const findJob = async (lat,lng) => {
    const res = await api.get(`/job/findJob/${lat}/${lng}`);
    return res.data;
}
