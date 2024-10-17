import api from '../api';

export const allReferralShovelers = async () => {
   
    const res = await api.get('/auth/get_Shovelers_With_Probation_Completed');
    return res.data;
   
}

export const sendPaymentToReferer = async (userId) => {
 
    const res = await api.get(`/auth/sendRefererPayment/${userId}`);
    return res.data;
}

