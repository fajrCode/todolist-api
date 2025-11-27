import Todo from './todo.js';

export const syncModels = async (force = false) => {
    try {
        await Todo.sync({ force });
        console.log('✅ All models sync successful');
    } catch (err) {
        console.error('❌ Error sync models', err);
        throw err;
    }
};
