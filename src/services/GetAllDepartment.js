const Department = require('../model/DepartmentModel.js');
module.exports = class GetAllDepartment {
  static async getAllDepartments(req) {
    try {
      const departments = await Department.find();
      return departments;
    } catch (error) {
      throw new Error('Error fetching departments: ' + error.message);
    }
  }
  static async getDepartmentById(departmentId) {
    try {
      const department = await Department.find({ _id: departmentId });
      if (!department || department.length === 0) {
        throw new Error('Departamento não encontrado');
      }
      return department;
    } catch (error) {
      throw new Error('Error fetching department: ' + error.message);
    }
  }
}