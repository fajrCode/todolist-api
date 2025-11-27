import db, { testDbConn } from '../src/config/db.js';
import { syncModels } from '../src/models/index.js';

const setupDb = async () => {
    try {
        console.log('🚀 Start db setup');
        console.log('Test connection...');
        const isConnected = await testDbConn();
        if (!isConnected) throw new Error('Db connection failed');
        console.log('Sync models...');
        await syncModels(true);
        await db.close();
        process.exit(0);
    } catch (err) {
        console.error('❌ Database setup fail:', err.message);
        process.exit(1);
    }
};

setupDb();
