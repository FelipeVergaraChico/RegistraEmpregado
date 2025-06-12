const router = require('express').Router();
const LoginController = require('../controller/LoginController.js');

router.post('/', LoginController.Login);
router.post('/employee', LoginController.EmployeeLogin);

module.exports = router;