import { InvalidCredentialsError } from '@/errors/invalid-credentials.error'
import { AuthloginServiceRequest } from '@/interfaces/auth-route.interfaces'
import { UsersRepository } from '@/interfaces/users-repository.interfaces'
import { compare } from 'bcryptjs'

export class AuthLoginService {
  private readonly usersRepository: UsersRepository

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ email, password }: AuthloginServiceRequest) {
    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const doesPasswordMatches = await compare(password, user.password_hash)

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError()
    }

    return {
      user,
    }
  }
}
