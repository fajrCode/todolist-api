import dotenv from 'dotenv';
dotenv.config();

const env = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3000',
    host: process.env.HOST || '0.0.0.0',
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || '3306',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        dialect: process.env.DB_DIALECT || 'mysql',
        name: process.env.DB_NAME || (NODE_ENV === 'test' ? 'test_db' : 'app_db'),
    },
    cors: {
        origin: process.env.CORS_ORIGIN || '*',
        method: process.env.CORS_METHOD || 'GET,POST,PUT,DELETE,OPTIONS',
    },
};

export default env;
