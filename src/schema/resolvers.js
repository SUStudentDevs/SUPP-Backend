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

export default root = {
    roles: () => DB.getRoles().then(data => data.map(d => new Role(d))),
    user: (args) => UserDB.findById(args.id).then(user => new User(user)),
    current_user: (_, context) => UserDB.findOne({where: {username: context.user.username}}).then(user => new User(user)),
    ue: (args) => DB.getUEById(args.id).then(data => new UE(data))
};
