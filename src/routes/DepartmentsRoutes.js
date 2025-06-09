const router = require('express').Router();

const DepartmentController = require('../controller/DepartmentController.js');

router.get('/', DepartmentController.GetAllDepartments);

module.exports = router;