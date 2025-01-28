import { ResourceNotFoundError } from '@/errors/resource-not-found.error'
import { makeProfileUserFactory } from '@/factories/users/make-profile-user.factory'
import { FastifyReply, FastifyRequest } from 'fastify'

export const profileUserController = async (
  request: FastifyRequest,
  reply: FastifyReply,
) => {
  try {
    const profileUserFactory = makeProfileUserFactory()

    const { user } = await profileUserFactory.execute(request.user.sub)

    return reply.status(200).send({ user })
  } catch (error) {
    if (error instanceof ResourceNotFoundError) {
      return reply.status(404).send({ message: error.message })
    }

    throw error
  }
}
