import {Router} from 'express'
import { createKids, deletekids, viewKids, viewsortedKids } from '../Controller/kidsController'

const router:Router = Router()

router.route('/create-kid').post(createKids)
router.route('/view-kid').get(viewKids)
router.route('/view-sorted-kid').get(viewsortedKids)
router.route('/delete-kid/:kidID').delete(deletekids)

export default router;