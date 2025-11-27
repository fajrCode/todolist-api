import response from '../utils/response.js';
import env from '../config/env.js';

export const notFound = (_, res) => {
    response(res, 404, 'Resource not found!');
};

export const other = (err, req, res, next) => {
    if (!err) {
        return next();
    }

    const statusCode = err.statusCode || 500;
    res.status(statusCode);

    if (env.nodeEnv === 'development') {
        console.info(err.message);
    } else if (statusCode === 500) {
        console.info(err.message);
    }

    const message = statusCode === 500 ? 'Internal Server Error' : err.message;

    res.json({
        status: err.status || false,
        message,
        data: err.data || null,
    });
};
