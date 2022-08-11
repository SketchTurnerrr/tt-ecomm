import { createServer } from '@graphql-yoga/node';
import { readFileSync } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { join } from 'path';
import {schema} from '../../../graphql/schema'

const typeDefs = readFileSync(join(process.cwd(), "schema.ts"), {
  encoding: 'utf-8'
})

const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({schema});

export default server;
