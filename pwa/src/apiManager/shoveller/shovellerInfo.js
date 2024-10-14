import api from '../api';

export const getShovellerJobStatusAndShovellerName = async (jobId,shovellerId) => {
    const res = await api.get(`/job/getShovellerJobStatusAndShovellerName?jobId=${jobId}&shovellerId=${shovellerId}`);
    return res.data;
}
