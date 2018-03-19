/**
 * Schema de données
 * @module schema
 * @author Basile Pesin
 */
import { buildSchema } from 'graphql'

export default buildSchema(`
    type Query {
        "A single user by it's id"
        user(id: ID!): User
        "All the roles"
        roles: [Role]
        "A single UE by it's id"
        ue(id: ID!): UE
        "The current user"
        current_user: User
    },

    type Mutation {
        "Create a user"
        newUser(username: String!, password: String!, name: String, surname: String, role: RoleInput!): User
    }

    "A User of the app"
    type User {
        id: ID
        username: String
        name: String
        surname: String
        fullname: String
        role: Role
    },

    "Roles of the users"
    type Role {
        id: ID
        name: String
    },

    input RoleInput {
        name: String
    }

    "A UE"
    type UE {
        id: ID
        shortname: String
        fullname: String
        slots: [Slot]
        groups: [Group]
        credits: Int
    },

    "A UE time slot"
    type Slot {
        id: ID
        ue: UE
        type: Slot_Type
        group: Group
        day: Int
        startTime: Time
        endTime: Time
        room: String
    },

    "Type of a slot (course, TD)"
    type Slot_Type {
        id: ID
        name: String
    },

    "A group"
    type Group {
        ue: UE
        number: ID
        size: Int
        students: [User]
    }

    "Time of the day (hour and minute)"
    type Time {
        hour: Int
        minute: Int
        "Displays time as a string"
        time: String
    },
`);
