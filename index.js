const SwaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const { server, plugins } = require('./server');

const express = require('express');
const app = express();

app.use('/api-docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocument));

(async () => {
    try {
        await server.register(plugins);

        await server.start();
        console.log("Server listening: " + server.info.uri);
    } catch (error) {
        console.log(error);
    }
})();
