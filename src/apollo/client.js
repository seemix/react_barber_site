import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({
    uri: '/wp/index.php?graphql',
});
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;

