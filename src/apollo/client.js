import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const link = createHttpLink({

    uri: 'https://levelupbalti.com/wp/index.php?graphql/',
    // credentials: 'same-origin'

});
const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
});

export default client;

