import { Router } from 'express';
import todoRoute from './todo.route.js';
import categoryRoute from './category.route.js';

export default (app) => {
    const router = Router();
    app.use('/api/v1', router);

    router.get('/', (_, res) => {
        res.send('API v1 ready to use 🔥🔥🔥');
    });

    todoRoute(router, '/todos');
    categoryRoute(router, '/categories');
};
