import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'

export default class MomentsController {
  public async store({ request, response }: HttpContext) {
    const body = request.body()
    const moment = await Moment.create(body)

    return {
      moment,
    }
  }
}
