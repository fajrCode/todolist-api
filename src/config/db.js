import { Sequelize } from 'sequelize';
import env from './env.js';

const db = new Sequelize(env.db.name, env.db.user, env.db.password, {
    host: env.db.host,
    port: env.db.port,
    dialect: env.db.dialect,
    logging: env.nodeEnv === 'development' ? (...msg) => console.log(msg[0]) : false,
    pool: {
        max: 5, // maximum koneksi dalam pool
        min: 0, // minimum koneksi dalam pool
        acquire: 30000, // waktu max (ms) mencoba dapat koneksi
        idle: 10000, // waktu akx (ms) koneksi idle
    },
    define: {
        underscored: true,
    },
});

export const testDbConn = async () => {
    try {
        await db.authenticate();
        console.info('✅ Database connection successfully');
    } catch (err) {
        console.log(err);
        console.error('❌ Database connection failed');
    }
};

export default db;
