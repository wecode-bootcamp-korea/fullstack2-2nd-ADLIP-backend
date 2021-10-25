import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.status(200).send('ping');
});

app.use((req, res, next) => {
  res.status(400).send('NOT FOUND');
});

app.use((err, req, res, next) => {
  console.error(error);
  res.status(500).send('INTERNAL SERVER ERROR');
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end('pong');
});

server.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
