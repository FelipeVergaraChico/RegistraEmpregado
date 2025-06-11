const router = require("express").Router();

const DepartmentController = require("../controller/DepartmentController.js");

router.get("/search", DepartmentController.SearchDepartment);

router.get("/", DepartmentController.GetAllDepartments);
router.get("/:departmentId", DepartmentController.GetDepartmentById);
router.post("/register", DepartmentController.Register);
router.patch("/update/:departmentId", DepartmentController.UpdateDepartment);
router.delete("/delete/:departmentId", DepartmentController.DeleteDepartment);

module.exports = router;
