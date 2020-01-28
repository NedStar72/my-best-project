import express from 'express';

const router = express.Router();

import filterHandler from './filter'
import amountPagesHandler from './amount'
import findHandler from './find'
import saveHandler from './save'
import updateHandler from './update'
import deleteHandler from './delete'

/* GET PAGE */
router.get('/page/:page', filterHandler);

/* GET AMOUNT OF PAGES */
router.get('/pages', amountPagesHandler);

/* GET BY ID */
router.get('/:id', findHandler);

/* SAVE */
router.post('/', saveHandler);

/* UPDATE */
router.put('/:id', updateHandler);

/* DELETE */
router.delete('/:id', deleteHandler);

export default router;
