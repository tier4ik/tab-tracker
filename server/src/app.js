const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routs = require('./routs.js');
// const mongodb = require('mongodb');
// const mongoose = require('mongoose');
const db = require('./configs/mongodb_config');

const port = process.env.PORT || 3000;

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

routs(app)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('we are connected!');
    });
});
