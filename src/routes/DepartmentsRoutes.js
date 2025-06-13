const router = require("express").Router();

const DepartmentController = require("../controller/DepartmentController.js");
const AuthUser = require("../middlewares/AuthUser.js");
const isRhDepartment = require("../middlewares/isRhDepartment.js");

router.get("/search", AuthUser, DepartmentController.SearchDepartment);

router.get("/", AuthUser, DepartmentController.GetAllDepartments);
router.get("/:departmentId", AuthUser, DepartmentController.GetDepartmentById);
router.post("/register", AuthUser, isRhDepartment, DepartmentController.Register);
router.patch("/update/:departmentId", AuthUser, isRhDepartment, DepartmentController.UpdateDepartment);
router.delete("/delete/:departmentId", AuthUser, isRhDepartment, DepartmentController.DeleteDepartment);

module.exports = router;
