const db = require('./db');
import { Request, Response } from 'express';

const getAll = async (req: Request, res: Response) => {
    const result = await db.query('SELECT * FROM facts ORDER BY RANDOM() LIMIT 1');
    res.send(result.rows[0]);
}


module.exports = { getAll };