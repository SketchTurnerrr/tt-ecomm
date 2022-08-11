import { makeExecutableSchema } from '@graphql-tools/schema';
import { m } from 'framer-motion';

const typeDefinitions = `
  type Query {
    hello: String!
    info: String!
    feed: [Link!]!
  }
  
  type Link {
    id: ID!
    description: String!
    url: String!
  }

   type Mutation {
    postLink(url: String!, description: String!): Link!
  }
`;

type Link = {
  id: string;
  url: string;
  description: string;
};

// 2
const links: Link[] = [
  {
    id: 'link-0',
    url: 'https://graphql-yoga.com',
    description: 'The easiest way of setting up a GraphQL server',
  },
  {
    id: 'fbe14a8c-bdca-4840-a8d7-c89b999887cc',
    url: 'https://vercel.com',
    description: 'Best hosting platform',
  },
];

const resolvers = {
  Query: {
    hello: () => 'Hello Earth!',
    info: () => `This is the API of a Hackernews Clone`,
    // 3
    feed: () => links,
  },
  Link: {
    id: (parent: Link) => parent.id,
    description: (parent: Link) => parent.description,
    url: (parent: Link) => parent.url,
  },
  Mutation: {
    postLink: (parent: unknown, args: { description: string; url: string }) => {
      // 1
      let idCount = links.length;

      // 2
      const link: Link = {
        id: `link-${idCount}`,
        description: args.description,
        url: args.url,
      };

      links.push(link);

      return link;
    },
  },
};

export const schema = makeExecutableSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions],
});
