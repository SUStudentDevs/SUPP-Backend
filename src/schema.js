/**
 * Schema de données
 * @module schemas
 * @author Basile Pesin
 */
import { buildSchema } from 'graphql'

export default buildSchema(`
    type Query {
        hello: String
        user(id: ID!): User
        roles: [Role]
    }

    type User {
        id: ID
        name: String,
        surname: String,
        complete_name: String,
        role: Role
    },

    type Role {
        id: ID
        name: String
    }
`);
