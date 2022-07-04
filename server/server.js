const express = require('express');
require('./utils/db');
require('dotenv').config();
const cors = require('cors');
const port = 9999;
const app = express();


app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({
        message: "connected"
    });
});

app.use('/api/user', require('./router/router'));


app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});