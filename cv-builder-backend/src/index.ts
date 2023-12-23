import express from 'express';
import cors from 'cors';

import router from './router';
import { corsConfig } from './config';

const app = express();
const port = 3000;

app.use(cors(corsConfig));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(port, () => {
    console.log(`CV builder backend listening on port ${port}`)
});
