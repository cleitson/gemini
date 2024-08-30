import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import uploadRouter from './routes/uploadRoute';
import fs from 'fs';
import path from 'path';



const app = express();

app.use(express.json({ limit: '100mb' }));

app.use('/upload', uploadRouter);
app.get('/src/image/image.jpeg', (req, res) => {
  const imagePath = path.join(__dirname, 'image', 'image.jpeg'); // Caminho da imagem local
  res.sendFile(imagePath);
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello, world!' });
});

export default app;