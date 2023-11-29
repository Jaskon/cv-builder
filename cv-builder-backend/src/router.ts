import express from 'express';
import { generatePdf, validateData } from './pdf';

const router = express.Router();

router.post('/generatePdf', async (req, res) => {
    const validationErrors = validateData(req.body.data);
    if (validationErrors.length) {
        res.status(400).send(validationErrors);
        return;
    }

    await generatePdf(req.body.data);
    res.send('Done!');
});

export default router;
