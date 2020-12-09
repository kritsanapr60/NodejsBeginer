const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;

// Connect database
mongoose.connect(
    process.env.MONGO_URI, { urlencoded: true }
).then(() => {
    console.log(`DB connected !!`);
});

mongoose.connection.on('error', (err) => {
    console.log(`DB connection error ${err}`);
});

// Import routes
const postRoutes = require('./routes/post');

// Middleware
// const myOwnMiddleware = (req, res, next) => {
//     console.log('Middleware working');
//     next();
// }
app.use(morgan('dev'));
// app.use(myOwnMiddleware);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', postRoutes);

app.listen(port, () => {
    console.log(`Server is runing at : http://localhost:${port}`);
});