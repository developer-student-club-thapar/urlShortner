const express = require('express');
const connectDB = require('./config/dbconnect');
const app = express();

//Connect to database
connectDB();

app.use(express.json({ extended: false}))

// Define Routes
app.use('/', require('./routes/index'))
app.use('/api/url', require('./routes/url'))

const port = 5000

app.listen(port);