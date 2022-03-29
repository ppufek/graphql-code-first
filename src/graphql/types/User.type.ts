import { Field, ID, ObjectType } from 'type-graphql'
import { GraphQLString } from 'graphql'

@ObjectType({
    description: 'User of the app.',
    // implements: Human,
})
export default class User {

    @Field( () => ID)
        id: string

    @Field(() => GraphQLString)
        name: string
}
