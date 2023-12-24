import express from 'express';
import { downloadPdf, getPdf, validateData } from './pdfGenerator';
import { IGeneratePdfApi } from '../../common-model/generatePdf';

const router = express.Router();

router.post('/get-pdf', async (req, res) => {
    const data = req.body as IGeneratePdfApi;

    const validationErrors = validateData(data.content);
    if (validationErrors.length) {
        res.status(400).send(validationErrors);
        return;
    }

    const pdfGenerated = await getPdf(data.content, data.template);

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfGenerated);
});

router.post('/download-pdf', async (req, res) => {
    const data = req.body as IGeneratePdfApi;

    const validationErrors = validateData(data.content);
    if (validationErrors.length) {
        res.status(400).send(validationErrors);
        return;
    }

    await downloadPdf(data.content, data.template);

    res.send('ok');
});

export default router;
