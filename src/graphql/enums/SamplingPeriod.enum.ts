import { registerEnumType } from 'type-graphql'

export enum SamplingPeriodEnum {
    MS_10 = 'MS_10',
    MS_20 = 'MS_20',
    MS_100 = 'MS_100'
}

registerEnumType(SamplingPeriodEnum, {
    name: 'SamplingPeriodEnum',
    description: 'Time difference between signal occurrence',
})
