import { Field, ID, ObjectType } from 'type-graphql'
import { GraphQLString } from 'graphql'

@ObjectType({
    description: 'Company of the user.',
})
export default class Company {

    @Field( () => ID)
        id: string

    @Field(() => GraphQLString, { description: 'The name of the company.' })
        name: string
}
