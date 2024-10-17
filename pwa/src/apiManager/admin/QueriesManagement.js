import api from '../api';

export const allQueries = async () => {
    
        const res = await api.get('/query/getAllQueries');
        console.log(res.data.allQueries);
        return res.data.allQueries;
   
}

export const sendQueryResponse = async (queryId, response) => {
    
        const res = await api.patch(`/query/updateQuery/${queryId}`, {response : response});
        console.log(res.data.updateQuery);
        return res.data.updatedQuery;
    
}