import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'stores'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome').notNullable()
      table.string('cnpj').notNullable()
      table.string('email').notNullable()
      table.string('telefone', 20).notNullable()
      table.string('endereco').notNullable()
      table.string('numero', 10).notNullable()
      table.string('bairro').notNullable()
      table.string('cidade').notNullable()
      table.string('estado', 50).notNullable()
      table.string('cep', 10).notNullable()
      table.string('logo').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
