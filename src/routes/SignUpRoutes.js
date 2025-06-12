const router = require('express').Router();
const SignUpController = require('../controller/SignUpController.js');
const AuthUser = require('../middlewares/AuthUser.js');
const isRhDepartment = require('../middlewares/isRhDepartment.js');

router.post('/', SignUpController.SignUp);
router.post('/admin', AuthUser, isRhDepartment, SignUpController.AdminSignUp);

module.exports = router;