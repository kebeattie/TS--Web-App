import express from 'express';
import { Request, Response } from 'express';
let cors = require('cors');
let data = require('./data-mockup.json');

const app = express();
const port: number = 4000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})