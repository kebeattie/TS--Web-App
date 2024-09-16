import express from 'express';

let db = require('./db/db-functions');
let cors = require('cors');

const app = express();
const port: number = 4000;

app.use(cors());

app.get('/', db.getAll);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})