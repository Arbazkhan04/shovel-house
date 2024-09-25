import api from '../api';

export const forgotPassword = async (email) => {
    try {
        const res = await api.post('/auth/forgotPassword', { email : email});
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

export const resetPassword = async (password, resetToken) => {
    const res = await api.patch(`/auth/resetPassword/${resetToken}`, { password });
    return res.data;
}