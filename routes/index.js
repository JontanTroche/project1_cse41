const routes = require ('express').Router();
const lesson1Controllers = require('../controllers/lesson1');

routes.get('/', lesson1Controllers.nameRoute);
routes.get('/vale', lesson1Controllers.valeRoute);
routes.get('/tathy', lesson1Controllers.tathyRoute);

module.exports = routes;