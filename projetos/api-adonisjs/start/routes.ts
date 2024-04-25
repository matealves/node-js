/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import MomentsController from '#controllers/moments_controller'
import router from '@adonisjs/core/services/router'

// router
//   .group(() => {
//     router.get('/', async () => {
//       return {
//         hello: 'world',
//       }
//     })
//   })
//   .prefix('/api')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/moments', MomentsController).apiOnly()
