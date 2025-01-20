import { FastifyInstance } from 'fastify'
import * as userController from '@/controllers/users'
import * as authController from '@/controllers/auth'

export const routes = async (app: FastifyInstance) => {
  app.get('/', () => {
    return { message: 'Hello World' }
  })

  // Users routes
  app.register(
    async (userRoutes) => {
      userRoutes.post('/', userController.createUserController)
    },
    { prefix: 'users' },
  )

  // Auth routes
  app.register(
    async (authRoutes) => {
      authRoutes.post('/login', authController.authLoginController)
    },
    { prefix: 'auth' },
  )
}
