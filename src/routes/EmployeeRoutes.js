const router = require("express").Router();

const EmployeeController = require("../controller/EmployeeController");

router.get("/", EmployeeController.GetAllEmployees);
router.post("/register", EmployeeController.Register);
router.patch("/update/:id", EmployeeController.UpdateEmployee);

module.exports = router;
