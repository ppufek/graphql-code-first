import { Field, ID, ObjectType } from 'type-graphql'
import { GraphQLString } from 'graphql'

@ObjectType({
    description: 'Company of the user.',
})
export default class Company {
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

    @Field( () => ID, { description: 'The id of the company.' })
        id!: string

    @Field(() => GraphQLString, { description: 'The name of the company.' })
        name!: string
}
