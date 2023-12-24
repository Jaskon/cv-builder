import Axios from 'axios';
import { IGeneratePdfApi } from '../../../common-model/generatePdf';

export const API = Axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getPdfPost = async (data: IGeneratePdfApi) => {
    const response = await API.post('/get-pdf', data, { responseType: 'blob' });
    return response.data;
}

export const downloadPdfPost = async (data: IGeneratePdfApi) => {
    const response = await API.post('/download-pdf', data);
    return response.data;
}
