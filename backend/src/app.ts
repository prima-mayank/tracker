import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { corsOptions } from './config/index.js';
import { errorMiddleware } from './middleware/index.js';
import apiRoutes from './routes/index.js';

const app = express();

app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api', apiRoutes);

app.use(errorMiddleware);

export default app;
