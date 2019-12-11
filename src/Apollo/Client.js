import ApolloClient from 'apollo-boost';
import { defaults, resolvers } from './LocalState';

export default new ApolloClient({
  uri: 'http://118.43.222.83:4000/',
  clientState: {
    defaults,
    resolvers,
  },
});
