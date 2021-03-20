'use strict'

const Model = use('Model')

class Clothing extends Model {
  static boot(){
    super.boot()
    // this.addTrait('@provider:IgorTrinidad/Uuid', { field: 'id', version: 'v4'})
  }
  user () {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Clothing
