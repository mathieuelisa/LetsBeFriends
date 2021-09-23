// fichier index
require('dotenv').config();
const cors = require('cors');
const express = require('express');

// TODO désintaller les modules mutler et body-parser

const router = require('./app/router');

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/v1', router);

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)})