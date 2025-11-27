import app from './config/app.js';
import env from './config/env.js';

const startServer = async () => {
    try {
        app.listen(env.port, () => {
            console.log(`🚀 Server running on ${env.host}`);
        });
    } catch (error) {
        console.error(`Server Error: ${error}`);
    }
};

startServer();
