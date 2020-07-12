const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json({ extended: true }));

app.use('/api/winelist', require('./routes/api/wine'));

app.listen(5000, () => {
    console.log('App is listening on port 5000');
});
