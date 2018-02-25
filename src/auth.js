/**
 * Authentification
 * @module auth
 * @author Basile Pesin
 */

import jwt from 'jsonwebtoken'
import config from './config'
import DB from './DB'

export function verifyJWTToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, confg.secret, (err, decodedToken) => {
            if(err || !decodedToken) { return reject(err) }
            resolve(decodedToken)
        })
    })
}

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
    DB.getUserByUsernameAndPassword(username, password).then((data) => {
        if(data.length<1) res.sendStatus('401');
        else res.send({
            token: createJWTToken({
                username: data[0].username,
                role_id: data[0].role_id
            })
        })
    })
}
