import { Field, FieldResolver, ID, ObjectType, Root } from 'type-graphql'
import { GraphQLString } from 'graphql'
import Company from './Company.type'

@ObjectType({
    description: 'User of the app.',
    // implements: Human,
})
export default class User {
    // LIMITATION: constructors are annoying.
    constructor(data?: {
        id: string;
        name: string;
    }) {
        // TypeGraphQL constructs with no args, so we need this.
        if (!data) {
            return
        }
        this.id = data.id
        this.name = data.name
    }

    @Field( () => ID, { description: 'The id of the user.' })
        id!: string

    @Field(() => GraphQLString, { description: 'The name of the user.' })
        name!: string
}
