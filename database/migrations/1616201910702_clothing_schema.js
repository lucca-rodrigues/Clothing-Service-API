'use strict'
const Schema = use('Schema')

class ClothingSchema extends Schema {
  up () {
    this.create('clothing', (table) => {
      table.increments()
      // table.uuid('id').index().unique().notNullable().primary()
      // table.uuid('user_id').unsigned().references('id').inTable('users').onUpdate('CASCADE').onDelete('SET NULL')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
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
