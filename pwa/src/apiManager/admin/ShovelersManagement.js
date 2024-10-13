import api from '../api';

export const allShovelersInfo = async () => {
    try {
        const res = await api.get('/auth/getAllShovelersInfo');
        console.log(res.data.shovelers);
        return res.data.shovelers;
    } catch (error) {
        console.log(error);
    }
}

export const updateShovelerStatus = async (userId, status) => {
    console.log(userId, status)
    const res = await api.patch(`/auth/changeUserStatus/${userId}`, { status: status });
    return res.data;
}
