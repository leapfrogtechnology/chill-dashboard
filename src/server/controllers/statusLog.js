import {Router} from 'express';
import * as statusLogService from '../services/statusLog';

const router = Router();

/**
 * GET /api/status
 */
router.get('/', (req, res, next) => {
  statusLogService.fetchLatestStatusLogs()
    .then(data => res.json({data}))
    .catch(err => next(err));
});


/**
 * GET /api/status/:id
 */
router.get('/:id', (req, res, next) => {
  statusLogService.getStatus(req.params.id)
    .then(data => res.json({data}))
    .catch(err => next(err));
});

export default router;
