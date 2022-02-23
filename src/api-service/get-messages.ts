import api from './api';

export const getMessages = async () => {
  try {
    const response = await api.get('/articles').then(({data}) => data);
    console.log('RESPONSE', response);
    return response;
  } catch (error) {
    console.log('ERROR', error);
    throw new Error(error);
  }
};
