import Axios from 'axios';

export const API = Axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generatePdf = async (data: any) => {
    const response = await API.post('/generatePdf', { data });
    return response.data;
}
