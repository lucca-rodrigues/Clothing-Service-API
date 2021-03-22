'use strict'
const Schema = use('Schema')

class ClothingSchema extends Schema {
  up () {
    this.create('clothing', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('description').notNullable()
      table.decimal('value', 12, 2).notNullable()
      table.integer('inventory').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clothing')
  }
}

module.exports = ClothingSchema
