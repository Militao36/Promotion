import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Store from './Store'

export default class Promotion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public image: string

  @column()
  public link: string

  @column()
  public storeId: number

  @column()
  public startDate: DateTime

  @column()
  public endDate: DateTime

  @column()
  public status: 'active' | 'inactive'

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Store, { foreignKey: 'storeId' })
  public store: BelongsTo<typeof Store>
}
