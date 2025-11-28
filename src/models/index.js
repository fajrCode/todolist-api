import Category from './category.js';
import Todo from './todo.js';

Category.hasMany(Todo, {
    foreignKey: 'categoryId',
    as: 'todos',
});

Todo.belongsTo(Category, {
    foreignKey: 'categoryId',
    as: 'category',
});

export { Category, Todo };
