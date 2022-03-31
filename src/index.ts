import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import getSchema from './graphql/buildSchema'


const schema = getSchema()

const server = new ApolloServer({
    schema
})

server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
})
