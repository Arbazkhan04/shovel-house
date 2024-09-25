import api from '../api';

export const forgotPassword = async (email) => {
    const res = await api.post('/auth/forgotPassword', { email });
    return res.data;
}

export const resetPassword = async (password, resetToken) => {
    const res = await api.patch(`/auth/resetPassword/${resetToken}`, { password });
    return res.data;
}