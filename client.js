import { ApolloClient, InMemoryCache } from "@apollo/client";
export const client = new ApolloClient({
 uri: "https://graphql.us.fauna.com/graphql",
 headers: {
   authorization: `Bearer ${process.env.REACT_APP_FAUNA_SERVER_SECRET}`,
 },
 cache: new InMemoryCache(),
});
