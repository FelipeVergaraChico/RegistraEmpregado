const Department = require('../model/DepartmentModel.js');
module.exports = class GetAllDepartment {
  static async GetAllDepartments(req) {
    try {
      const departments = await Department.find();
      return departments;
    } catch (error) {
      throw new Error('Error fetching departments: ' + error.message);
    }
  }
}