import { FieldResolver, Query, Resolver, Root } from 'type-graphql'
import Vehicle from '../types/Vehicle.type'
import Signal from '../types/Signal.type'

@Resolver(() => Vehicle)
export class VehicleResolver {

    @Query(() => [Vehicle])
    vehicles(): Vehicle[] {
        return []
    }

    @FieldResolver(() => [Signal])
    signals(
        @Root() vehicle: Vehicle
    ): Signal[] {
        return []
    }
}
