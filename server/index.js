const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const router = require('.//routes/user.routes.js');


dotenv.config();
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);

});