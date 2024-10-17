import api from '../api';

export const createJob = async (userId,data) => {
    const res = await api.post(`/job/createJob/${userId}`,data);
    return res.data;
}