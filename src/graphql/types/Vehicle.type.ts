import { Field, ID, ObjectType } from 'type-graphql'
import { GraphQLString } from 'graphql'

@ObjectType({
    description: 'Registered user vehicle in the system.',
})
export default class Vehicle {
    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }


    @Field(() => ID)
        id: string

    @Field(() => GraphQLString)
        name: string

    // @IsVin()
    @Field(() => GraphQLString)
        vin: string
}
