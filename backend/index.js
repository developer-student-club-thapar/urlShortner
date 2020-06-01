const express = require('express');
const connectDB = require('./config/dbconnect');
const bodyParser = require('body-parser');
const app = express();

//Connect to database
connectDB();

app.use(bodyParser.json());

// for integration
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});


// Define Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const port = 5000

app.listen(port);