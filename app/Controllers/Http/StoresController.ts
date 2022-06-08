import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Store from 'App/Models/Store'

export default class StoresController {
  public async create({ request, response }: HttpContextContract) {
    const data = request.only([
      'nome',
      'cnpj',
      'email',
      'telefone',
      'endereco',
      'numero',
      'bairro',
      'cidade',
      'estado',
      'cep',
      'logo',
    ])

    const loja = await Store.create(data)

    return response.created({
      id: loja.id,
    })
  }
}
