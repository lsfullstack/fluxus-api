import { FastifyInstance } from 'fastify'

export const routes = async (app: FastifyInstance) => {
  app.get('/', () => {
    return { message: 'Hello World' }
  })
}
