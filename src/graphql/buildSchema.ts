import { BuildSchemaOptions, buildSchemaSync } from 'type-graphql'
import { UserResolver } from './resolvers/User.resolver'
import { GraphQLSchema } from 'graphql'
import { VehicleResolver } from './resolvers/Vehicle.resolver'
import { SignalResolver } from './resolvers/Signal.resolver'

export default function getSchema(options?: Pick<BuildSchemaOptions, 'authChecker'>): GraphQLSchema {
    return buildSchemaSync({
        ...options,
        resolvers: [UserResolver, VehicleResolver, SignalResolver],
        validate: false,
    })
}
