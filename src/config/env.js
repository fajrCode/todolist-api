import dotenv from 'dotenv';
dotenv.config();

const env = {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    host: process.env.HOST,
    db: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dialect: process.env.DB_DIALECT,
        name: process.env.DB_NAME,
    },
    cors: {
        origin: process.env.CORS_ORIGIN,
        method: process.env.CORS_METHOD,
    },
};

export default env;
