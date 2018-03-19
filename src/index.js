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
import root from './schema/resolvers'
import DB from './DB'
import config from './config'
import { login } from './auth/token'
import User from './DB/User'
import Enrollment from './DB/Enrollment'

var app = express()

Enrollment.sync()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Headers pour le localhost
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST");
    next();
})

/*app.post('/graphql', jwt({secret: config.secret}),
    (req, res, next) => {
        if(!req.user.authorized) return res.sendStatus(401)
        next()
    },
    graphqlHTTP(req => {
        return {
            schema: schema,
            rootValue: root,
            context: {
                user: req.user
            },
            graphiql: true
        }
    })
)*/

// Temporary !

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.post('/login', (req, res) => {
    login(req.body.username, req.body.password, res)
})

app.listen(4000, () => console.log('Serveur graphql démarré sur localhost:4000/graphql'))
