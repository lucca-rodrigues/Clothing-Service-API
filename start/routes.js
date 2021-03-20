'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Welcome to Clothing API V1.0' }
})

Route.get('/clothings', 'ClothingController.index')
Route.get('/clothings/:id', 'ClothingController.show')
Route.post('/clothings', 'ClothingController.store')
Route.put('/clothings/:id', 'ClothingController.update')
Route.delete('/clothings/:id', 'ClothingController.destroy')
