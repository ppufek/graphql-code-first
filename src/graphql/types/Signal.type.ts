import { Field, ID, ObjectType } from 'type-graphql'
import { GraphQLString } from 'graphql'
import { SamplingPeriodEnum } from '../enums/SamplingPeriod.enum'

@ObjectType()
export default class Signal {
    @Field(() => ID)
        id: string

    @Field(() => GraphQLString)
        name: string

    @Field(() => SamplingPeriodEnum)
        samplingPeriod: SamplingPeriodEnum
}
