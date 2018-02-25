/**
 * Entry point
 * @module index
 * @author Basile Pesin
 */

import express from 'express'
import jwt from 'express-jwt'
import graphqlHTTP from 'express-graphql'
import bodyParser from 'body-parser'
import { graphql, buildSchema } from 'graphql'
import schema from './schema'
import root from './resolvers'
import DB from './DB'
import config from './config'
import { login } from './auth'

var app = express()
DB.connect()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('/protected/*', jwt({secret: config.secret}),
    (req, res, next) => {
        if(!req.user.authorized) return res.sendStatus(401)
        next()
    }
)
app.use('/protected/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}))

app.post('/login', (req, res) => {
    login(req.body.username, req.body.password, res)
})
app.listen(4000, () => console.log('Serveur graphql démarré sur localhost:4000/graphql'))
