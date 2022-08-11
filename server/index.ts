import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port || 1337, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});

const prisma = new PrismaClient();
