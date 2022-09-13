import express, { Express, Request, Response } from 'express';
import os from 'os'
import { main, create, getPets } from './services'

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', async (req: Request, res: Response) => {
  await getPets()
  res.send(`node cloud js - you reach ${os.hostname()}`);
});

app.get('/create', async (req: Request, res: Response) => {
  await create()
  res.send('created');
})

app.listen(port, async () => {
  await main()
  console.log(`⚡️[server]: Server is running on port: ${port}`);
});