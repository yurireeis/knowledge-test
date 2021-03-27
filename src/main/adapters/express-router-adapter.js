const adaptRoute = (controller) => {
    return async (req, res) => {
        const request = {
            body: req.body,
            route: req.params,
            query: req.query,
        };

        const httpResponse = await controller.handle(request);

        if (httpResponse.statusCode >= 200 || httpResponse.statusCode <= 299) {
            res
                .status(httpResponse.statusCode)
                .json(httpResponse.body);
        } else {
            res
                .status(httpResponse.statusCode)
                .json({
                    errors: httpResponse.body.errors.map(error => error.message),
                });
        }
    };
};

module.exports = {
    adaptRoute
};
