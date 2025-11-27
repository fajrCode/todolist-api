import * as todoCtrl from '../../../controllers/todo.ctrl.js';

export default (router, prefix = '') => {
    router.get(prefix + '/', todoCtrl.getTodoList);
};
