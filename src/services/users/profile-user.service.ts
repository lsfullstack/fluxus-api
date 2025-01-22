import { ResourceNotFoundError } from '@/errors/resource-not-found.error'
import { UsersRepository } from '@/interfaces/users-repository.interfaces'

export class ProfileUserService {
  private readonly usersRepository: UsersRepository
  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute(uuid: string) {
    const user = await this.usersRepository.findByUuid(uuid)

    if (!user) {
      throw new ResourceNotFoundError()
    }

    return {
      user: {
        ...user,
        password_hash: undefined,
      },
    }
  }
}
