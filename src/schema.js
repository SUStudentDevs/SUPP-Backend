/**
 * Schema de données
 * @module schema
 * @author Basile Pesin
 */
import { buildSchema } from 'graphql'

export default buildSchema(`
    type Query {
        user(id: ID!): User
        roles: [Role]
        ue(id: ID!): UE
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
    },

    type UE {
        id: ID
        shortname: String
        fullname: String
        slots: [Slot]
        groups: [Group]
        credits: Int
    },

    type Slot {
        id: ID
        ue: UE
        type: Slot_Type
        group: Group
        day: Int
        startTime: Time
        endTime: Time
    },

    type Slot_Type {
        id: ID
        name: String
    },

    type Group {
        UE_id: ID
        number: ID
        size: Int
        students: [User]
    }

    type Time {
        hour: Int
        minute : Int
    },
`);
