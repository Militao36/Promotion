import Store from 'App/Models/Store'

export interface StoreServiceInterface {
  create(data: object): Promise<Store>
}

export function StoreService() {
  async function create(body: object) {
    const data = await Store.create(body)

    return data
  }

  return {
    create,
  }
}
