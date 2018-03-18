/**
 * Resolvers
 * @module schema/resolvers
 * @author Basile Pesin
 */

import DB from '../DB'
import User from './classes/User'
import Role from './classes/Role'
import UE from './classes/UE'

import UserDB from '../DB/User'
import RoleDB from '../DB/Role'
import UEDB from '../DB/UE'

export default root = {
    roles: () => RoleDB.findAll().then(roles => roles.map(r => new Role(r))),
    user: (args) => UserDB.findById(args.id).then(user => new User(user)),
    current_user: (_, context) => UserDB.findOne({where: {username: context.user.username}}).then(user => new User(user)),
    ue: (args) => UEDB.findById(args.id).then(data => new UE(data))
};
