const adaptRoute = (controller) => {
    return async (req, res) => {
        const request = {
            body: req.body,
            route: req.params,
            query: req.query,
        };

        const httpResponse = await controller.handle(request);

        if (httpResponse.body.success === 'true') {
            res
                .status(httpResponse.statusCode)
                .json(httpResponse.body);
        } else {
            res
                .status(httpResponse.statusCode)
                .json({
                    success: httpResponse.body.success,
                    errors: httpResponse.body.errors.map(error => error.message),
                });
        }
    };
};

module.exports = {
    adaptRoute
};
