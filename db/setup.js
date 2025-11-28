import db, { testDbConn } from '../src/config/db.js';
import { syncModels } from '../src/models/index.js';

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
