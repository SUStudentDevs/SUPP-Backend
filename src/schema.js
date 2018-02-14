/**
 * Schema de données
 * @module schemas
 * @author Basile Pesin
 */
import { buildSchema } from 'graphql'

export default buildSchema(`
    type Query {
        user(id: ID!): User
        roles: [Role]
    }

    type User {
        id: ID
        username: String
        name: String
        surname: String
        complete_name: String
        role: Role
    },

    type Role {
        id: ID
        name: String
    }
`);
