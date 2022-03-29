import { Arg, FieldResolver, ID, Query, Resolver, Root } from 'type-graphql'
import User from '../types/User.type'
import Company from '../types/Company.type'

@Resolver(() => User)
export class UserResolver {
    @Query(() => User, { nullable: true })
    user(
        @Arg('id', () => ID) id: string
    ): User | null {
        return null
    }

    @Query(() => [User])
    users(): Array<User> {
        return []
    }

    @FieldResolver(() => [Company], {
        description:
            'The companies of the user, or any empty list if they have none.',
    })
    companies(@Root() user: User): Array<Company> {
        return []
    }
}
