import Axios from 'axios';
import { IGeneratePdfApi } from '../../../common-model/generatePdf';

export const API = Axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generatePdfPost = async (data: IGeneratePdfApi) => {
    const response = await API.post('/generate-pdf', data);
    return response.data;
}
