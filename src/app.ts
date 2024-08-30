import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import uploadRouter from './routes/uploadRoute';
import getImageRouter from './routes/getImage';
import confirmRouter from './routes/confirmRoute';




const app = express();

app.use(express.json({ limit: '100mb' }));

app.use('/src/image', getImageRouter);
app.use('/upload', uploadRouter);
app.use('/confirm', confirmRouter);

app.get('/', (req, res) => {
  res.send({ message: 'Hello, world!' });
});

export default app;