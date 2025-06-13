const router = require("express").Router();

const EmployeeController = require("../controller/EmployeeController");
const AuthUser = require("../middlewares/AuthUser.js");
const isRhDepartment = require("../middlewares/isRhDepartment.js");

router.get("/search", AuthUser, EmployeeController.SearchEmployee);

router.get("/", AuthUser, EmployeeController.GetAllEmployees);
router.get("/:id", AuthUser, EmployeeController.GetEmployeeById);
router.get("/department/:departmentId", AuthUser, EmployeeController.GetAllEmployeesByDepartmentId);
router.post("/register", AuthUser, isRhDepartment, EmployeeController.Register);
router.patch("/update/:id", AuthUser, isRhDepartment, EmployeeController.UpdateEmployee);
router.delete("/delete/:id", AuthUser, isRhDepartment, EmployeeController.DeleteEmployee);

module.exports = router;
