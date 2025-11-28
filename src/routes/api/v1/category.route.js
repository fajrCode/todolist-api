import * as CategoryCtrl from '../../../controllers/category.ctrl.js';

export default (router, prefix = '') => {
    router.get(prefix + '/', CategoryCtrl.getAllCategory);
    router.get(prefix + '/:id', CategoryCtrl.getDetailCategory);
    router.post(prefix + '/', CategoryCtrl.createCategory);
    router.patch(prefix + '/:id', CategoryCtrl.updateCategory);
    router.delete(prefix + '/:id', CategoryCtrl.deleteCategory);
};
