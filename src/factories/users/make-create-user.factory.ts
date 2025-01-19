import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users.repository'
import { CreateUserService } from '@/services/users/create-user.service'

export const makeCreateUserFactory = () => {
  const prismaUsersRepository = new PrismaUsersRepository()
  const createUserService = new CreateUserService(prismaUsersRepository)

  return createUserService
}
