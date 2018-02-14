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
    }

    "A User of the app"
    type User {
        id: ID
        username: String
        name: String
        surname: String
        complete_name: String
        role: Role
    },

    "Roles of the users"
    type Role {
        id: ID
        name: String
    },

    "A UE"
    type UE {
        id: ID
        shortname: String
        fullname: String
        slots: [Slot]
        groups: [Group]
        credits: Int
    },

    "A UE slot"
    type Slot {
        id: ID
        ue: UE
        type: Slot_Type
        group: Group
        day: Int
        startTime: Time
        endTime: Time
    },

    "Type of a slot (course, TD)"
    type Slot_Type {
        id: ID
        name: String
    },

    "A group"
    type Group {
        UE_id: ID
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
