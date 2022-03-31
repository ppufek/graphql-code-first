import { Field, ID, ObjectType } from 'type-graphql'
import { GraphQLString } from 'graphql'

@ObjectType({
    description: 'User of the app.',
    // implements: Human,
})
export default class User {

    constructor(id: number, username: string) {
        this.id = id
        this.username = username
    }

    @Field( () => ID)
        id: number

    @Field(() => GraphQLString)
        username: string

    password: string
}
