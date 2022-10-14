import express, { Express, Request, Response } from 'express';
import os from 'os'
import { main, create, getPets } from './services'
import bodyparser from 'body-parser'
import { createClient } from 'redis';

const url = process.env.REDIS_URL as string
// const client = createClient({url: `redis://${url}` });
const client = createClient({url: `redis://redis:6379` });

client.on('error', (err) => console.log('Redis Client Error', err));
// client.on('connect', () => console.log('successfully connected'));
// const connectionString = () => {
//   return client.connect()
// }
// const connect = () => client.connect();
// console.log(async() => await connectionString());



const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', async (req: Request, res: Response) => {
  // const pets = await getPets()
  res.send(`node cloud js - you reach ${os.hostname()}`);
});

app.post('/create', async (req: Request, res: Response) => {
  await create(req.body)
  res.send('created');
})

app.listen({port, host: '0.0.0.0'}, async () => {
  // await main()
  await client.connect();
  console.time("start")
  await client.set('key', 'mortis');
  const value = await client.get('key');
  console.timeEnd("start")
  console.log(value);
  console.log(`⚡️[server]: Server is running on port: ${port}`);
});