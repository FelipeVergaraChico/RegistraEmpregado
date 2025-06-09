const router = require('express').Router();

const DepartmentController = require('../controller/DepartmentController.js');

router.get('/', DepartmentController.GetAllDepartments);
router.post('/register', DepartmentController.Register);

module.exports = router;