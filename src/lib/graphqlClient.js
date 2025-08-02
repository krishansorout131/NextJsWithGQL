import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.HASURA_GRAPHQL_ENDPOINT || "";
const secret = process.env.HASURA_ADMIN_SECRET || "";

export const client = new GraphQLClient(endpoint, {
  headers: {
    'x-hasura-admin-secret': secret,
  },
});
