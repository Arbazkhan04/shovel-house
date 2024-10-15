import api from '../api';

export const updateJobStatus = async (jobId,shovellerId,decision) => {
    const res = await api.post('/job/updateHouseOwnerDecision', { jobId,shovellerId,decision });
    return res.data;
}

export const getShovellersWhoAppliedOnYourJob = async (jobId) => {
    const res = await api.get(`/job/getListOfShovellerWhoAppliedOnJobs/${jobId}`);
    return res.data.shovellers;
}


//calcel the job
export const cancelJob = async (jobId,shovellerId) => {
    const res = await api.post('/job/cancelJob', { jobId,shovellerId });
    return res.data;
}

export const getShovellerJobStatus = async (jobId,shovellerId) => {
    const res = await api.get('/job/getShovellerJobStatus',{jobId,shovellerId})
    return res.data
}

export const feedbackByHouseOwner = async (jobId,jobRating,houseOwnerFeedback) => {
    const res = await api.post('/job/feedbackByHouseOwner', { jobId,jobRating,houseOwnerFeedback });
    return res.data;
}

//cancel the job if no shoveller applied
export const cancelJobIfNoShovellerApplied = async (jobId) => {
    const res = await api.post('/job/cancelJobIfNoShovellerApplied', { jobId });
    return res.data;
}

export const isJobCompleted = async(jobId) => {
    const res = await api.post(`/job/isJobCompleted`,{jobId});
    return res.data;
}