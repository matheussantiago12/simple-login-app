import Route from '@ioc:Adonis/Core/Route'
import HealthCheck from '@ioc:Adonis/Core/HealthCheck'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('/login', 'AuthController.login')
Route.post('/register', 'AuthController.register')
Route.get('/logout', 'AuthController.logout')

Route.get('/logged-user', async ({ response, auth }) => {
  return response.json(auth.user)  
}).middleware('auth')

Route.get('health', async ({ response }) => {
  const report = await HealthCheck.getReport()
  
  return report.healthy
    ? response.ok(report)
    : response.badRequest(report)
})
