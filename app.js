import express from 'express';
import routes from './routes';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(routes);

app.use((req, res, next) => {
  res.status(400).send('NOT FOUND');
});

app.use((err, req, res, next) => {
  const { status, message } = err;
  console.error(err);
  res.status(status || 500).json({ message });
});

export default app;
