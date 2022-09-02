import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import os from 'os'
import { main } from './services'
import { petSchemaModel } from './models/Pet'
import { now } from 'mongoose';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.get('/', async (req: Request, res: Response) => {
  await main()
  const pet = new petSchemaModel({
    petId:"asdasda",
    name: "gaspar",
    age: 2,
    date: now()
  })
  try {
    await pet.save()
  } catch (error) {
    console.log(error);
  }
  res.send(`node cloud js - you reach ${os.hostname()}`);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running on port: ${port}`);
});