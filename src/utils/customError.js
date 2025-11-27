export default class ErrorCustom extends Error {
    constructor(message, statusCode = 400) {
        super(message);
        this.status = false;
        this.statusCode = statusCode;
    }
}
