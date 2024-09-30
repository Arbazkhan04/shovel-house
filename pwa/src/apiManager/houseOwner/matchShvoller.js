import api from '../api';

export const updateJobStatus = async (jobId,shovellerId,decision) => {
    const res = await api.post('/updateHouseOwnerDecision', { jobId,shovellerId,decision });
    return res.data;
}

export const getShovellersWhoAppliedOnYourJob = async (jobId) => {
    const res = await api.get(`/getListOfShovellerWhoAppliedOnJobs/${jobId}`);
    return res.data.shovellers;
}