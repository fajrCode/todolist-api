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

export const syncModels = async (force = false, alter = true) => {
    try {
        await Category.sync({ force, alter });
        await Todo.sync({ force, alter });
        console.log('✅ All models sync successful');
    } catch (err) {
        console.error('❌ Error sync models', err);
        throw err;
    }
};

export { Category, Todo };
