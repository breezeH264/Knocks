const express = require('express');
const cors = require('cors');

const products = require('./products');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('welcome to hell');
});
app.get('/products', (req, res) => {
  res.send(products);
});

const port = process.env.PORT || 6969;

app.listen(port, console.log(`port ${port} is up and running`));
