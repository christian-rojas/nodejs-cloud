import express, { Express, Request, Response } from 'express';
import os from 'os'
import { main, create, getPets } from './services'
import bodyparser from 'body-parser'

const app: Express = express();
const port = process.env.PORT || 8080;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.get('/', async (req: Request, res: Response) => {
  const mainRetunr = await main()
  const pets = await getPets()
  res.send(`node cloud js - you reach ${os.hostname()} - ${ mainRetunr } - ${ pets } /`);
});

app.post('/create', async (req: Request, res: Response) => {
  await create(req.body)
  res.send('created');
})

app.listen({port, host: '0.0.0.0'}, async () => {
  // await main()
  console.log(`⚡️[server]: Server is running on port: ${port}`);
});