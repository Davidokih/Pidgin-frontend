const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.API_KEY;

mongoose.connect(url).then(() => {
    console.log('connected to precious');
}).catch((err) => {
    console.log('error connecting to mongoDB', err);
});

module.exports = mongoose;