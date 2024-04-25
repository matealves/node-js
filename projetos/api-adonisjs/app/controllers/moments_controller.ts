import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { v4 as uuidv4 } from 'uuid'
import Moment from '#models/moment'

export default class MomentsController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContext) {
    const body = request.body()
    const moment = await Moment.create(body)

    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`
      await image.move(app.tmpPath('uploads'), {
        name: imageName,
      })

      body.image = imageName
    }

    response.status(201)
    return {
      message: 'Momento criado com sucesso!',
      data: moment,
    }
  }
}
