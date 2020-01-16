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

const app = next({ dev: process.env.NODE_ENV !== 'production' });
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
        return app.render(req, res, './pages/example', req.query)
    })

    const port = process.env.PORT || '3000';

    server.listen(port, () => console.log(`http://localhost:${port}/`));
})
