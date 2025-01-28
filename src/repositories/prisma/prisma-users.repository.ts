import { UsersRepository } from '@/interfaces/users-repository.interfaces'
import { prisma } from '@/lib/prisma'
import { Prisma, User } from '@prisma/client'

export class PrismaUsersRepository implements UsersRepository {
  async create(user: Prisma.UserCreateInput): Promise<User> {
    const createdUser = await prisma.user.create({
      data: user,
    })

    return createdUser
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  async findByUuid(uuid: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        uuid,
      },
    })

    return user
  }
}
