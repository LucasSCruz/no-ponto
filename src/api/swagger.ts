const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'No-Ponto API',
      version: '1.0.0',
      description: 'Sistema de registro de ponto. Desenvolvido em Nodejs+Express e MongoDB utilizando clean arch.',
    }
  },
  apis: ['./src/api/routes/*.ts', './src/api/routes/*.js', './dist/src/api/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
