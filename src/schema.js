/**
 * Schema de données
 * @module schemas
 * @author Basile Pesin
 */
var { buildSchema } = require('graphql');

exports.schema = buildSchema(`
    type Query {
        hello: String
    }
`);
