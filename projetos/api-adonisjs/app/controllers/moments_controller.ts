import type { HttpContext } from '@adonisjs/core/http'
import app from '@adonisjs/core/services/app'
import { v4 as uuidv4 } from 'uuid'
import Moment from '#models/moment'

interface UpdateMomentRequestBody {
  title?: string
  description?: string
  image?: string
}

export default class MomentsController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContext) {
    const body = request.body()
    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`

      await image.move(app.tmpPath('uploads'), {
        name: imageName,
      })

      body.image = imageName
    }

    const moment = await Moment.create(body)

    response.status(201)
    return {
      message: 'Momento criado com sucesso!',
      data: moment,
    }
  }

  public async index() {
    const moments = await Moment.all()
    return { data: moments }
  }

  public async show({ params }: HttpContext) {
    const moment = await Moment.findOrFail(params.id)
    return { data: moment }
  }

  public async destroy({ params }: HttpContext) {
    const moment = await Moment.findOrFail(params.id)
    await moment.delete()

    return {
      message: 'Momento excluído com sucesso!',
      moment,
    }
  }

  public async update({ params, request }: HttpContext) {
    const body = request.body as UpdateMomentRequestBody
    const moment = await Moment.findOrFail(params.id)

    if (body.title !== undefined) {
      moment.title = body.title
    }
    if (body.description !== undefined) {
      moment.description = body.description
    }

    if (moment.image != body.image || !moment.image) {
      const image = request.file('image', this.validationOptions)

      if (image) {
        const imageName = `${uuidv4()}.${image.extname}`

        await image.move(app.tmpPath('uploads'), {
          name: imageName,
        })

        moment.image = imageName
      }
    }

    await moment.save()

    return {
      message: 'Momento atualizado com sucesso!',
      data: moment,
    }
  }
}
