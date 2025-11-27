export default (res, code, message = 'Success', data = null) => {
    return res.status(code).json({
        status: code < 400,
        message,
        data,
    });
};
