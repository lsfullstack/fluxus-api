import { EmailAlreadyExistsError } from '@/errors/email-already-exists.error'
import { UsersRepository } from '@/interfaces/users-repository.interfaces'
import { CreateUserRequest } from '@/interfaces/users-route.interface'
import { hash } from 'bcryptjs'

export class CreateUserService {
  private readonly usersRepository: UsersRepository

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, password }: CreateUserRequest) {
    const existingUser = await this.usersRepository.findByEmail(email)

    if (existingUser) {
      throw new EmailAlreadyExistsError()
    }

    const passwordHash = await hash(password, 6)

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash: passwordHash,
    })

    return {
      user,
    }
  }
}
