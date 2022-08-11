import { createServer } from '@graphql-yoga/node';
import { NextApiRequest, NextApiResponse } from 'next';
import {schema} from '../../../graphql/schema'


const server = createServer<{
  req: NextApiRequest;
  res: NextApiResponse;
}>({schema});

export default server;
