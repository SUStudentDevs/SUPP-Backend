/**
 * Resolvers
 * @module schema/resolvers
 * @author Basile Pesin
 */

import DB from '../DB'
import User from './classes/User'
import Role from './classes/Role'
import UE from './classes/UE'
import Enrollment from './classes/Enrollment'

import UserDB from '../DB/User'
import RoleDB from '../DB/Role'
import UEDB from '../DB/UE'
import EnrollmentDB from '../DB/Enrollment'

export default root = {
    // Query resolvers
    roles: () => RoleDB.findAll().then(roles => roles.map(r => new Role(r))),
    user: (args) => UserDB.findById(args.id).then(user => new User(user)),
    current_user: (_, context) => UserDB.findOne({where: {username: context.user.username}}).then(user => new User(user)),
    ue: (args) => UEDB.findById(args.id).then(data => new UE(data)),

    // Mutation resolvers
    newUser: (args) => RoleDB.findOne({where: {name: args.role.name}}).then(r => UserDB.findOrCreate({
        where:{username:args.username}, 
        defaults:{username:args.username, password:args.password, name:args.name, surname:args.surname, roleId:r.id}
    }).then(data => new User(data[0]))),

    newEnrollment: (args) => EnrollmentDB.findOrCreate({
        where:{userId:args.userId, ueId:args.ueId},
        defaults:{userId:args.userId, ueId:args.ueId, year:args.year}
    }).then(data => new Enrollment(data[0])),
}
