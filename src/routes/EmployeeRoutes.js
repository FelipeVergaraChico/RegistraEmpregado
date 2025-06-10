const router = require("express").Router();

const EmployeeController = require("../controller/EmployeeController");

router.get("/search", EmployeeController.SearchEmployee);

router.get("/", EmployeeController.GetAllEmployees);
router.get("/:id", EmployeeController.GetEmployeeById);
router.get("/department/:departmentId", EmployeeController.GetAllEmployeesByDepartmentId);
router.post("/register", EmployeeController.Register);
router.patch("/update/:id", EmployeeController.UpdateEmployee);
router.delete("/delete/:id", EmployeeController.DeleteEmployee);

module.exports = router;
