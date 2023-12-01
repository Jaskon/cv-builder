import express from 'express';
import { generatePdf, validateData } from './pdf';
import { IGeneratePdfApi } from '../../common-model/generatePdf';

const router = express.Router();

router.post('/generate-pdf', async (req, res) => {
    const data = req.body as IGeneratePdfApi;

    const validationErrors = validateData(data.content);
    if (validationErrors.length) {
        res.status(400).send(validationErrors);
        return;
    }

    await generatePdf(data.content, data.template);
    res.send('Done!');
});

router.get('/generate-html', async (req, res) => {
    res.sendFile('index.html', { root: __dirname + '/../../cv-html-builder-preact/dist' });
});

export default router;
