import api from '../api';

export const allJobsInfo = async () => {
    
        const res = await api.get('/job/getAllJobsInfo');
        return res.data.jobs;
    
}

export const manualCapture = async (jobId, shovellerId, role) => {
    
        const res = await api.post('/job/markJobAsCompleted', { jobId, shovellerId, role });
        return res.data;
    
}
