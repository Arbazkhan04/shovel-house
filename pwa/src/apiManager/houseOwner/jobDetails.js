import api from '../api';

export const getJobDetails = async (jobId, shovelerId) => {
    const res = await api.post(`/job/getJobDetailsForHouseOwner/${jobId}`, { shovelerId });
    return res.data;
}

