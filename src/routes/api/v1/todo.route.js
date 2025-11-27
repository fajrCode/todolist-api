import * as TodoCtrl from '../../../controllers/todo.ctrl.js';

export default (router, prefix = '') => {
    router.get(prefix + '/', TodoCtrl.getTodoList);
    router.get(prefix + '/:id', TodoCtrl.getDetailTodo);
    router.post(prefix + '/', TodoCtrl.createTodo);
    router.patch(prefix + '/:id', TodoCtrl.updateTodo);
    router.delete(prefix + '/:id', TodoCtrl.deleteTodo)
};
