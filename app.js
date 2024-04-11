import express from 'express';
import bodyParser from 'body-parser';
// import client from './config/pg.js';
import routes from './routes/routes.js';
import test from './ts/promise.js';

// const util = require('util');
// const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

app.get('/', (req, res) => res.send('Main page. PG'));
// app.get('/', (req, res));


// util.promisify




app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
