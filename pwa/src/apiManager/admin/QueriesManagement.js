import api from '../api';

export const allQueries = async () => {
    try {
        const res = await api.get('/query/getAllQueries');
        console.log(res.data.allQueries);
        return res.data.allQueries;
    } catch (error) {
        console.log(error);
    }
}

export const sendQueryResponse = async (queryId, response) => {
    try {
        const res = await api.patch(`/query/updateQuery/${queryId}`, {response : response});
        console.log(res.data.updateQuery);
        return res.data.updatedQuery;
    } catch (error) {
        console.log(error);
    }
}