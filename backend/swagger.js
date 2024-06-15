const swaggerAutogen = require('swagger-autogen')()
const document = {
    info: {
        title: 'Swagger Documentation',
        description: 'NodeJS + MySQL'
    },
    host: 'localhost:5001',
    // schemes: ['http'],
}

const outputFile = './swagger_output.json'
const routes = ['./routes/user.route.js']

swaggerAutogen(outputFile, routes, document)