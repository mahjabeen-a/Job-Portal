import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/jobs', (req, res) => {
  res.send(data.jobs);
});
//The req object represents the HTTP request .
//The res.send() function basically sends the HTTP response
app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});