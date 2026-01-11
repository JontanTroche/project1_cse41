const router = require ('express').Router();
const lesson1Controllers = require('../controllers/users');

router.get('/', (req, res) => {
    res.send('Hello World');
});

router.use('/users', require('./users'));

module.exports = router;