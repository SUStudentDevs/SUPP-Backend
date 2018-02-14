var express = require('express');
var graphqlHTTP = require('express-graphql');
var { graphql, buildSchema } = require('graphql');
var { schema } = require('./schema');
var { root } = require('./resolvers');

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000, () => console.log('Serveur graphql démarré sur localhost:4000/graphql'));
