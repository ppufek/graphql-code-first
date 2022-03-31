import { Field, ID, InputType } from 'type-graphql'
import { IsBoolean, IsUUID } from 'class-validator'
import { GraphQLBoolean } from 'graphql'

@InputType()
export class TrackedSignalsInput {
    @IsUUID('4')
    @Field(() => ID)
        vehicleId: string

    @IsBoolean()
    @Field(() => GraphQLBoolean)
        isTracked: boolean
}
