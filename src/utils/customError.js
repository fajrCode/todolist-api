export default class ErrorCustom extends Error {
    constructor(statusCode = 400, message) {
        super(message || ErrorCustom.getDefaultMessage(statusCode));
        this.status = false;
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }

    static getDefaultMessage(statusCode) {
        const messages = {
            400: 'Bad Request',
            401: 'Unauthorized',
            403: 'Forbidden',
            404: 'Not Found',
            405: 'Method Not Allowed',
            408: 'Request Timeout',
            409: 'Conflict',
            413: 'Content Too Large',
            500: 'Internal Server Error',
            502: 'Bad Gateway',
            503: 'Service Unavailable',
        };

        return messages[statusCode] || 'Internal Server Error';
    }
}
