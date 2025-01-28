import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users.repository'
import { ProfileUserService } from '@/services/users/profile-user.service'

export const makeProfileUserFactory = () => {
  const prismaUsersRepository = new PrismaUsersRepository()
  const profileUserService = new ProfileUserService(prismaUsersRepository)

  return profileUserService
}
