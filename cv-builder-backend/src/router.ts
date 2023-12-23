import express from 'express';
import { downloadPdf, getPdf, validateData } from './pdfGenerator';
import { IGeneratePdfApi } from '../../common-model/generatePdf';

const router = express.Router();

router.post('/generate-pdf', async (req, res) => {
    const data = req.body as IGeneratePdfApi;

    const validationErrors = validateData(data.content);
    if (validationErrors.length) {
        res.status(400).send(validationErrors);
        return;
    }

    const pdfGenerated = await getPdf(data.content, data.template);
    await downloadPdf(data.content, data.template);

    res.setHeader('Content-Type', 'application/pdf');
    res.send(pdfGenerated);
});

export default router;
