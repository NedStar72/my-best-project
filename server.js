const mongoose = require('mongoose');
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const next = require('next')

// Руты
const anime = require('./routes/anime');

// Подключение к БД
mongoose.connect('mongodb://localhost/shiki', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Сonnection succesful!'))
    .catch((err) => console.error(err));

const app = next(process.env.NODE_ENV !== 'production')
app.prepare().then(() => {
    const server = express();

    server.use(logger('dev'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ 'extended': 'false' }));
    //server.use(express.static(path.join(__dirname, 'build')));

    // Api
    server.use('/api/anime', anime);

    // Next.js
    server.get('/a', (req, res) => {
        return app.render(req, res, '/example', req.query)
      })

    const port = process.env.PORT || '3000';

    server.listen(port, () => console.log(`http://localhost:${port}/`));
})
