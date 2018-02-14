var express = require('express');
var graphqlHTTP = require('express-graphql');
import { graphql, buildSchema } from 'graphql';
import schema from './schema';
import root from './resolvers';
import DB from './DB';

var app = express();
DB.connect();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Serveur graphql démarré sur localhost:4000/graphql'));
