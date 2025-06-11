const Department = require("../model/DepartmentModel");
require("dotenv").config();

module.exports = class UpdateDepartmentService {
  static async UpdateDepartment(departmentId, name, description) {
    const department = await Department.findById(departmentId);
    if (!department) {
      throw new Error("Departamento não encontrado");
    }
    if (!name || !description) {
      throw new Error("Nome e descrição são obrigatórios");
    }
    department.name = name || department.name;
    department.description = description || department.description;

    const updatedDepartment = await department.save();
    return updatedDepartment;
  }
};
