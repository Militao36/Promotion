import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { Authentication } from 'App/Services/Auth'
import { UserService, UserServiceInterface } from 'App/Services/User'

export default class UsersController {
  private userService: UserServiceInterface

  constructor() {
    this.userService = UserService()
  }

  public async auth({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await Authentication(auth)(email, password)
    return token
  }

  public async create({ request, auth }: HttpContextContract) {
    const data = request.only(['email', 'password', 'type'])

    const user = await this.userService.create({
      email: data.email,
      password: data.password,
      type: data.type,
    })

    const token = await Authentication(auth)(data.email, data.password)

    return {
      id: user.id,
      token: token,
    }
  }
}
