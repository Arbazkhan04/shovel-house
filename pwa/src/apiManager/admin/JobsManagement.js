import api from '../api';

export const allJobsInfo = async () => {
    try {
        const res = await api.get('/job/getAllJobsInfo');
        console.log(res.data.jobs);
        return res.data.jobs;
    } catch (error) {
        console.log(error);
    }
}