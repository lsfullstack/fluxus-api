import { FastifyInstance } from 'fastify'
import * as userController from '@/controllers/users'

export const routes = async (app: FastifyInstance) => {
  app.get('/', () => {
    return { message: 'Hello World' }
  })

  app.register(
    async (userRoutes) => {
      userRoutes.post('/', userController.createUserController)
    },
    { prefix: 'users' },
  )
}
