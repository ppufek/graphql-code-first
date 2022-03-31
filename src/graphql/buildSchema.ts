import { BuildSchemaOptions, buildSchemaSync, NonEmptyArray } from 'type-graphql'
import { GraphQLSchema } from 'graphql'

import * as resolvers from './resolvers'

export default function getSchema(options?: Pick<BuildSchemaOptions, 'authChecker'>): GraphQLSchema {
    return buildSchemaSync({
        ...options,
        resolvers: [...Object.values(resolvers)] as unknown as NonEmptyArray<string>,
    })
}
