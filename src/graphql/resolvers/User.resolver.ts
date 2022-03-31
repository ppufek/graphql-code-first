import { Arg, FieldResolver, ID, Query, Resolver, Root } from 'type-graphql'
import User from '../types/User.type'
import Vehicle from '../types/Vehicle.type'

@Resolver(() => User)
export class UserResolver {
    @Query(() => User, { nullable: true })
    user(
        @Arg('id', () => ID) id: string
    ): User | null {
        return {
            id: '',
            name: ''
        }
    }

    @Query(() => [User])
    users(): User[] {
        return []
    }

    @FieldResolver(() => [Vehicle], {
        description:
            'The vehicles of the user, or any empty list if they have none.',
    })
    vehicles(@Root() user: User): Vehicle[] {
        return [new Vehicle('', 'Batmobil')]
    }
}
