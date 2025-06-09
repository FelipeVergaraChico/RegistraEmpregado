const router = require('express').Router();

const EmployeeController = require('../controller/EmployeeController');

router.get('/', EmployeeController.GetAllEmployees);

module.exports = router;