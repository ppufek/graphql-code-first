import { FieldResolver, Resolver, Root } from 'type-graphql'
import Vehicle from '../types/Vehicle.type'
import Signal from '../types/Signal.type'

@Resolver(() => Vehicle)
export class VehicleResolver {
    @FieldResolver(() => [Signal])
    signals(
        @Root() vehicleType: Vehicle
    ): Signal[] {
        return []
    }
}
