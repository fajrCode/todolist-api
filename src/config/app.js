import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import corsConfig from './cors.js';
import apiV1 from '../routes/api/v1/index.js';
import * as errorHandler from '../middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsConfig));
app.use(morgan('dev'));

apiV1(app);

app.use(errorHandler.notFound);
app.use(errorHandler.other);

export default app;
