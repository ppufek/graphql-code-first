import { Arg, Query, Resolver } from 'type-graphql'
import { TrackedSignalsInput } from '../input/TrackedSignals.input'
import Signal from '../types/Signal.type'

@Resolver()
export class SignalResolver {
    @Query(() => [Signal])
    trackedSignals(@Arg('input', () => TrackedSignalsInput, { nullable: true }) input: TrackedSignalsInput) {
        return []
    }
}
