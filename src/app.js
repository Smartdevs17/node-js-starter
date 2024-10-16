const http = require('http');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./routes/routes');
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(compression());

app.use(routes);

app.get('/', (req, res) => {
    res.send('Hello World');
});









const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});