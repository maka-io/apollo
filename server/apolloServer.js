import { Meteor } from 'meteor/meteor';
import { getExecutableSchema } from './schema';
import { GRAPHQL_SUBSCRIPTION_ENDPOINT } from '../constants';
import { createApolloServer } from './core/main-server';
import Config from './config';

export function createServer({ schema }) {
  let graphiqlOptions = {};
  if (!Config.DISABLE_SUBSCRIPTIONS) {
    graphiqlOptions = {
      subscriptionsEndpoint: GRAPHQL_SUBSCRIPTION_ENDPOINT,
    };
  }

  return createApolloServer(
    {
      schema,
      context: Config.CONTEXT,
      // tracing: true,
      // cacheControl: true,
    },
    {
      graphiqlOptions,
    }
  );
}