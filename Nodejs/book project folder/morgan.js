import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// attach Morgan middleware
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.get('/contact-us', (req, res) => {
  res.send('contact page');
});

app.get('/q', (req, res) => {
  res.send('this is for testing');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
