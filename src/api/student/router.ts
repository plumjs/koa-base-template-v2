import * as Router from 'koa-router'
import { Student } from './models'
import { RestHepler } from '../../rest'

const router: any = new Router({
  prefix: '/v1/students',
})
const ctrl = new Student()
const rest = new RestHepler(ctrl)

router.post('/', rest.create)
router.put('/', rest.put)
router.patch('/', rest.patch)
router.get('/:id', rest.findOne)
router.get('/', rest.findMany)
router.delete('/:id', rest.delete)

export { router }
