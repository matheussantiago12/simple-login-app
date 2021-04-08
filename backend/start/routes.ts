import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.register')
Route.get('/logout', 'AuthController.logout')
Route.get('/logged-user', 'AuthController.loggedUser').middleware('auth')
