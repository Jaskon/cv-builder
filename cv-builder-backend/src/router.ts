import express from 'express';
import { generatePdf, validateData } from './pdf';
import { IGeneratePdfApi } from '../../common-model/generatePdf';

const router = express.Router();

router.post('/generatePdf', async (req, res) => {
    const data = req.body as IGeneratePdfApi;

    const validationErrors = validateData(data.content);
    if (validationErrors.length) {
        res.status(400).send(validationErrors);
        return;
    }

    await generatePdf(data.content, data.template);
    res.send('Done!');
});

export default router;
