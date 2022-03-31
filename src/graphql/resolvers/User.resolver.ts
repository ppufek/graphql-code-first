import { Arg, FieldResolver, ID, Mutation, Query, Resolver, Root } from 'type-graphql'
import User from '../types/User.type'
import Vehicle from '../types/Vehicle.type'
import { LoginInput } from '../input/Login.input'
import { users } from '../../data/users'
import { GraphQLInt } from 'graphql'
import fetch from 'node-fetch'

@Resolver(() => User)
export class UserResolver {

    @Mutation(() => User, { nullable: true })
    public login(
        @Arg('input', () => LoginInput) input: LoginInput
    ) : User | null {

        const user = users.find(user => user.username === input.username)

        if(!user) {
            return null
        }

        return new User(user.id, user.username)
    }

    @Query(() => User, { nullable: true })
    user(
        @Arg('id', () => GraphQLInt) id: number
    ): User | null {
        const user = users.find(user => user.id === id)

        return user ? new User(user.id, user.username) : null
    }

    @Query(() => [User])
    public users(): User[] {
        return users
    }

    @FieldResolver(() => [Vehicle], {
        description:
            'The vehicles of the user, or any empty list if they have none.',
    })
    public async vehicles(@Root() user: User): Promise<Vehicle[]> {

        const response = await fetch('https://mocki.io/v1/3879ba91-825e-412f-93e7-97545a955882')

        if(!response.ok) {
            const invalidResponse = await response.json()
            console.log(invalidResponse)
            return invalidResponse
        }

        const body = await response.json()

        const vehicleList: Vehicle[] = []

        body.map((vehicle: any) => {
            if(vehicle.user_id === user.id) {
                vehicleList.push({
                    id: vehicle.id,
                    vin: vehicle.vin,
                    name: vehicle.name,
                    price: vehicle.user_id
                })
            }
        })

        return vehicleList
    }
}
