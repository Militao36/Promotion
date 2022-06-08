import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Promotion from 'App/Models/Promotion'
import Store from 'App/Models/Store'

export default class PromotionsController {
  public async create({ request, response }: HttpContextContract) {
    const data = request.only([
      'title',
      'description',
      'image',
      'link',
      'storeId',
      'startDate',
      'endDate',
      'status',
    ])

    await Store.findByOrFail('id', data.storeId)

    const promotion = await Promotion.create(data)

    return response.created({
      id: promotion.id,
    })
  }

  public async index({ request }: HttpContextContract) {
    const { storeId, page } = request.qs() as { storeId: string; page: number }

    const promotions = Promotion.query()

    if (storeId) {
      promotions.where('storeId', storeId)
    }

    const data = await promotions.paginate(page, 10)

    return {
      data,
    }
  }
}
