import 'reflect-metadata'

import { ApolloServer } from 'apollo-server'
import getSchema from './graphql/buildSchema'

async function main() {
    const schema = await getSchema()

    const server = new ApolloServer({
        schema
    })

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`)
    })
}

main()

