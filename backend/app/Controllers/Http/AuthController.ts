import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthController {
  public async login ({ request, auth }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    const token = await auth.use('api').attempt(email, password)
    return token.toJSON()
  }

  public async logout ({ response, auth }: HttpContextContract) {
    try {
      await auth.logout()

      return response.status(200).send(auth.user)
    } catch (error) {
      return response.status(400).json({ error: 'Erro ao dar logout' })
    } 
  }

  public async register ({ request, response }: HttpContextContract) {
      const email = request.input('email')
      const password = request.input('password')
      
      const user = await User.create({ email, password })

      return response.status(201).json(user)
  }
}
