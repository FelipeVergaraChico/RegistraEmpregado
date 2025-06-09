const Employee = require('../model/Employee');

module.exports = class GetAllEmployees {
  static async GetAllEmployees(req) {
    const employee = await Employee.find()

    return employee;
  }
  static async GetAllEmployeesByDepartmentId(req) {
    const { departmentId } = req.params;
    const employees = await Employee.find({ departmentId });
    return employees;
  }
}