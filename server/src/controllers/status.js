import {Router} from 'express';
import HttpStatus from 'http-status-codes';
import * as statusService from '../services/status';

const router = Router();

/**
 * GET /api/status
 */
router.get('/', (req, res, next) => {
  statusService.getAllStatus()
    .then(data => res.json({data}))
    .catch(err => next(err));
});


/**
 * GET /api/status/:id
 */
router.get('/:id', (req, res, next) => {
  statusService.getStatus(req.params.id)
    .then(data => res.json({data}))
    .catch(err => next(err));
});

export default router;
