'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const validNumber = require('./middlewares/validate-number');
const errorHandler = require('./error-handlers/500');

// Application level middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  // console.log('inside the get method');
  res.status(200).send('Hellooooooo from Home Route');
});


// Route level middleware
app.get('/square', validNumber(), (req, res) => {
  // const num = req.number;
  // res.send(number);
  const num = req.query.num;
  const data = num * num;
  res.status(200).json({ num: data });
});


// Error handling middleware
app.use(errorHandler);


function start(port) {
  app.listen(port || 3009, () => console.log(`server up a wake ^_^ on ${port}`));
}


module.exports = {
  app: app,
  start: start
};
