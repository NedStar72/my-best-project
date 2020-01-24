import { Router } from 'express';
import anime from './anime'

const router = Router();

router.use('/anime', anime);

export default router;
