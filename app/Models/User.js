'use strict'
const Model = use('Model')
const Hash = use('Hash')
class User extends Model {
  static boot () {
    super.boot()
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })

    // this.addTrait('@provider:IgorTrinidad/Uuid', { field: 'id', version: 'v4'})
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  clothing () {
    return this.hasMany('App/Models/Clothing')
  }

  user () {
    return this.belongsTo('App/Models/User')
  }

}

module.exports = User
