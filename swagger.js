const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Users Api',
        description: 'Users Api'
    },
    host: 'project1-cse41.onrender.com',
    schemes: ['http'],

    definitions: {
        User: {
            firstName: "test1",
            lastName: "test1",
            email: "test1@gmail.com",
            favoriteColor: "test1",
            birthday: "test1"
        }
    }
};

const outputFile = './swagger.json';
const endpointsFile = ['./routes/index.js'];

// this will generate swagger .json
swaggerAutogen(outputFile, endpointsFile, doc);