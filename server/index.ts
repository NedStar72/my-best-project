import express from 'express';
import bodyParser from 'body-parser';
import next from 'next';

// Connection to the database
import db from './db';
db.then(() => console.log('Сonnection succesful!')).catch((err) => console.error(err));

// Require routes
import api from './routes';

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || '3000';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: false }));
    //server.use(express.static(path.join(__dirname, 'build')));

    // Use routes
    server.use('/api', api);

    // Next.js
    server.all('*', (req, res) => {
        return handle(req, res);
    })

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`http://localhost:${port}/`);
    });
})
