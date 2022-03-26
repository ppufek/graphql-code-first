import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/User.resolver'
import { GraphQLSchema } from 'graphql'

export default async function getSchema(): Promise<GraphQLSchema> {
    return buildSchema({
        resolvers: [
            UserResolver
        ],
        // See https://github.com/MichalLytek/type-graphql/issues/150
        validate: false,
    })
}
