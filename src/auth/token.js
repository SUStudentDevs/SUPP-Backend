/**
 * Authentification
 * @module auth/token
 * @author Basile Pesin
 */

import jwt from 'jsonwebtoken'
import config from '../config'
import DB from '../DB'

import User from '../DB/User'

export function createJWTToken(details) {
    if(typeof details !== 'object') { details = {} }
    if(!details.maxAge || typeof details.maxAge !== 'number') { details.maxAge = 3600 }

    return jwt.sign({
        username: details.username,
        role_id: details.role_id,
        authorized: true
    }, config.secret, {
        expiresIn: details.maxAge,
        algorithm: 'HS256'
    })
}

export function login(username, password, res) {
    User.findOne({where: {username: username, password:password}}).then((data) => {
        if(!data || data.length<1) res.sendStatus('401');
        else res.send({
            token: createJWTToken({
                username: data.username,
                role_id: data.role_id
            })
        })
    })
}
