import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Store extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cnpj: string

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public endereco: string

  @column()
  public numero: string

  @column()
  public bairro: string

  @column()
  public cidade: string

  @column()
  public estado: string

  @column()
  public cep: string

  @column()
  public logo: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
