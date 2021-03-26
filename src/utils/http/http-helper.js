const ServerError = require('../errors/server');

const badRequest = (errors) => ({
    statusCode: 400,
    body: {
        success: 'false',
        errors,
    }
});

const serverError = (error) => ({
    statusCode: 500,
    body: {
        success: 'false',
        errors: [
            new ServerError(error.stack)
        ]
    }
});

const success = (data) => ({
    statusCode: 200,
    body: {
        success: 'true',
        data
    }
});

module.exports = {
    badRequest,
    serverError,
    success,
};
