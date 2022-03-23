import express from 'express'
import { routes } from './routes';
import { MongoConnection } from './database/MongoConnection';

export const api = express();
api.use(express.json())

const database = new MongoConnection();

database.connect();

routes();

api.listen(5000, () => console.log('express listeming'));
