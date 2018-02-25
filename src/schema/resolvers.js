/**
 * Resolvers
 * @module schema/resolvers
 * @author Basile Pesin
 */

import DB from '../DB'
import User from './classes/User'
import Role from './classes/Role'
import UE from './classes/UE'

export default root = {
    roles: () => DB.getRoles().then(data => data.map(d => new Role(d))),
    user: (args) => DB.getUserById(args.id).then(data => new User(data)),
    current_user: (_, context) => DB.getUserByUsername(context.user.username).then(data => new User(data)),
    ue: (args) => DB.getUEById(args.id).then(data => new UE(data))
};
