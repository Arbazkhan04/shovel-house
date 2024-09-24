import api from '../api';

export const updateJobStatus = async (jobId) => {
    const res = await api.post('/updateStatusForHouseOwnerAcceptedJob', { jobId });
    return res.data;
}