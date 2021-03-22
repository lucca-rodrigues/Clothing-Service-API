'use strict'

const Clothing = use('App/Models/Clothing')

class ClothingController {
  async index(){
    const clothing = Clothing.all()

    return clothing;
  }

  async store({request}){
    const data = request.only([
      'title',
      'description',
      'value',
      'inventory',
    ])

    const clothing = await Clothing.create({...data})

    return clothing;
  }

  async show({params}){
    const clothing = await Clothing.findOrFail(params.id)

    return clothing
  }

  async update({request, params}){
    const clothing = await Clothing.findOrFail(params.id)
      const data = request.only([
        'title',
        'description',
        'inventory',
        'value',
      ])
      clothing.merge(data)

      await clothing.save()

      return clothing
  }

  async destroy({params}){
    const clothing = await Clothing.findOrFail(params.id)

    await clothing.delete()
  }
}

module.exports = ClothingController
