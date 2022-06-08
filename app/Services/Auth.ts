import { AuthContract } from '@ioc:Adonis/Addons/Auth'

function Authentication(auth: AuthContract) {
  return async (email: string, password: string) => {
    const result = await auth.use('api').attempt(email, password)
    return result.toJSON()
  }
}

export { Authentication }
