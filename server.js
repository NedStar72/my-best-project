const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/shiki', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Сonnection succesful!'))
    .catch((err) => console.error(err));

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const anime = require('./routes/anime');

const server = express();

server.use(logger('dev'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ 'extended': 'false' }));
//server.use(express.static(path.join(__dirname, 'build')));

server.use('/api/anime', anime);

const port = process.env.PORT || '3000';

server.listen(port, () => console.log(`http://localhost:${port}/`));
