/**
 * Resolvers
 * @module resolvers
 * @author Basile Pesin
 */

import User from './classes/User'
import Role from './classes/Role'
import DB from './DB'

export default root = {
    hello: () => 'Hello world!',
    roles: () => DB.getRoles().then(data => data.map(d => new Role(d))),
    user: (args) => DB.getUserById(args.id).then(data => new User(data))
};
