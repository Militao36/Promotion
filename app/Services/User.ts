import User from 'App/Models/User'

export interface UserServiceInterface {
  create(data: object): Promise<User>
}

export function UserService() {
  async function create(body: object) {
    const data = await User.create(body)

    return data
  }

  return {
    create,
  }
}
