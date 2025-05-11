import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import type { NormalizedCacheObject } from '@apollo/client';

const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://spacex-api.fly.dev/graphql',
      credentials: 'same-origin'
    }),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            launchesPast: {
              merge(existing = [], incoming: any[]) {
                return incoming;
              },
            },
          },
        },
        LaunchRocket: {
          keyFields: false 
        },
        LaunchSite: {
          keyFields: false 
        },
      }, 
    }),
  });
};

const client = createApolloClient();

export default client;