import express from 'express'
import path from 'path'
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/src/public"));

app.get('/', (req, res) => res.sendFile(path.resolve('src/public/index.html')));

app.listen(port, () => console.log(`App starts at http://localhost:${port}/`));