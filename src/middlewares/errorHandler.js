import response from '../utils/response.js';
import env from '../config/env.js';

export const notFound = (req, res) => {
    response(res, 404, 'Resource not found!');
};

export const other = (err, req, res, next) => {
    if (!err) {
        return next();
    }

    const statusCode = err.statusCode || 500;
    res.status(statusCode);

    if (env.nodeEnv === 'development') {
        console.info(err);
    } else if (statusCode === 500) {
        console.error(err.message);
    }

    let message = statusCode === 500 ? 'Internal Server Error' : err.message;

    if (err.errors) {
        const eType = {
            1062: 409,
        };
        res.status(eType[err.parent.errno]);
        message = err.message;
        err.data = err.errors.map((e) => {
            return e.message;
        });
    }

    res.json({
        status: err.status || false,
        message,
        data: err.data || null,
    });
};
