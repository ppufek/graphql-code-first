import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql'
import Vehicle from '../types/Vehicle.type'
import Signal from '../types/Signal.type'
import fetch from 'node-fetch'
import { GraphQLInt } from 'graphql'

@Resolver(() => Vehicle)
export class VehicleResolver {

    @Query(() => Vehicle)
    async vehicle(@Arg('id', () => GraphQLInt) id: number): Promise<Vehicle> {

        const response = await fetch(`https://myfakeapi.com/api/cars/${id}`)
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
    async vehicles(@Arg('year', () => GraphQLInt) year: number): Promise<Vehicle[]> {

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
    signals(
        @Root() vehicle: Vehicle
    ): Signal[] {
        return []
    }
}
