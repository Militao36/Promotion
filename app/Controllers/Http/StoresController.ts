import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreService, StoreServiceInterface } from 'App/Services/Store'
import { UserService, UserServiceInterface } from 'App/Services/User'

export default class StoresController {
  private storeService: StoreServiceInterface
  private userService: UserServiceInterface

  constructor() {
    this.storeService = StoreService()
    this.userService = UserService()
  }

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
      'password',
    ])

    const user = await this.userService.create({
      email: data.email,
      password: data.password,
      type: 'lojista',
    })

    const store = await this.storeService.create({
      nome: data.nome,
      cnpj: data.cnpj,
      email: data.email,
      telefone: data.telefone,
      endereco: data.endereco,
      numero: data.numero,
      bairro: data.bairro,
      cidade: data.cidade,
      estado: data.estado,
      cep: data.cep,
      logo: data.logo,
      userId: user.id,
    })

    return response.created({
      id: store.id,
    })
  }
}
