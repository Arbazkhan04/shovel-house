import api from '../api';


export const postQuery = async (jobId,userId,title, query) => {
    const res = await api.post('/query/createQuery', { jobId,userId,title, query });
    return res.data;
}

