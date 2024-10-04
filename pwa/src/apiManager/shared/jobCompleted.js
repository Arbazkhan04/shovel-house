import api from '../api';


export const jobCompleted = async (jobId,shovellerId,role) => {
    const res = await api.post('/job/markJobAsCompleted', { jobId,shovellerId,role });
    return res.data;
}