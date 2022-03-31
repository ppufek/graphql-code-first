import { Field, InputType } from 'type-graphql'
import { GraphQLString } from 'graphql'

@InputType()
export class LoginInput {
    @Field(() => GraphQLString)
    public username: string

    @Field(() => GraphQLString)
    public password: string
}
