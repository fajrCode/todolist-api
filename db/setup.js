import db from '../src/config/db.js';
import { Todo, Category } from '../src/models/index.js';

const testDbConn = async () => {
    try {
        await db.authenticate();
        console.info('✅ Database connection successfully');
    } catch (err) {
        console.log(err);
        console.error('❌ Database connection failed');
    }
};

const syncModels = async (force = false, alter = true) => {
    try {
        await Category.sync({ force, alter });
        await Todo.sync({ force, alter });
        console.log('✅ All models sync successful');
    } catch (err) {
        console.error('❌ Error sync models', err);
        throw err;
    }
};

const setupDb = async () => {
    try {
        console.log('🚀 Start db setup');
        console.log('💡Test connection...');
        await testDbConn();
        console.log('🔃 Sync models...');
        await syncModels();
        await db.close();
        process.exit(0);
    } catch (err) {
        console.error('❌ Database setup fail:', err.message);
        process.exit(1);
    }
};

setupDb();
