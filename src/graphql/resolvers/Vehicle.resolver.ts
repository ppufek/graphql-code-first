import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import Vehicle from '../types/Vehicle.type'
import Signal from '../types/Signal.type'
import fetch from 'node-fetch'
import { GraphQLInt } from 'graphql'

@Resolver(() => Vehicle)
export class VehicleResolver {

    @Query(() => Vehicle)
    public async vehicle(@Arg('vehicleId', () => GraphQLInt) vehicleId: number): Promise<Vehicle> {

        const response = await fetch(`https://myfakeapi.com/api/cars/${vehicleId}`)
        const body = await response.json()

        const existingCar = body['Car']

        return {
            id: existingCar.id,
            name: existingCar.car,
            vin: existingCar.car_vin,
            price: existingCar.price
        }
    }

    @Query(() => [Vehicle])
    public async vehicles(@Arg('year', () => GraphQLInt) year: number): Promise<Vehicle[]> {

        const response = await fetch(`https://myfakeapi.com/api/cars/year/${year}`)

        if(!response.ok) {
            const invalidResponse = await response.json()
            console.log(invalidResponse)
            return invalidResponse
        }

        const body = await response.json()

        const existingCars = body['Cars']

        return existingCars.map((existingCar: any) => new Vehicle(existingCar.id, existingCar.car, existingCar.car_vin, existingCar.price))
    }

    @FieldResolver(() => [Signal])
    public signals(
        @Root() vehicle: Vehicle
    ): Signal[] {
        return []
    }
}
