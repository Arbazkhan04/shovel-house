import api from '../api';

export const getJobDetails = async (jobId, shovelerId) => {
    const res = await api.post(`/job/getJobDetailsForShoveller/${jobId}`, { shovelerId });
    return res.data;
}

