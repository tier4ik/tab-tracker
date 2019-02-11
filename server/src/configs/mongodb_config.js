const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://tab-tracker:tab-tracker1@ds261521.mlab.com:61521/tier4ik_data_base', {useNewUrlParser: true});
var db = mongoose.connection;
module.exports = db;