import mongoose from 'mongoose';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import next from 'next';

// Руты
import anime from './routes/anime';

// Подключение к БД
mongoose.connect('mongodb://localhost/shiki', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Сonnection succesful!'))
    .catch((err) => console.error(err));

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || '3000';
const app = next({ dev });
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express();

    server.use(logger('dev'));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    //server.use(express.static(path.join(__dirname, 'build')));

    // Api
    server.use('/api/anime', anime);

    // Next.js
    server.get('/a', (req, res) => {
        return app.render(req, res, '/example', req.query)
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`http://localhost:${port}/`)
    });
})
