const router = require('express').Router();

const EmployeeController = require('../controller/EmployeeController');

router.get('/', EmployeeController.GetAllEmployees);
router.post('/register', EmployeeController.Register);

module.exports = router;