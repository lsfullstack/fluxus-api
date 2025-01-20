import { User } from '@prisma/client'

export interface AuthloginServiceRequest {
  email: string
  password: string
}

export interface AuthloginServiceResponse {
  user: User
}
