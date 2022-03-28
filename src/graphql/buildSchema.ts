import { BuildSchemaOptions, buildSchemaSync } from 'type-graphql'
import { UserResolver } from './resolvers/User.resolver'
import { GraphQLSchema } from 'graphql'

export default function getSchema(options?: Pick<BuildSchemaOptions, 'authChecker'>): GraphQLSchema {
    return buildSchemaSync({
        ...options,
        resolvers: [UserResolver],
        validate: false,
    })
}
