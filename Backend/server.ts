import express from 'express';
import { Request, Response } from 'express';

const app = express();
const port: number = 4000;

app.get('/', (req: Request, res: Response) => {
    res.send("Server live test updated TS");
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
})