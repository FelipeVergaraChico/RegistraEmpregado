const Employee = require('../model/Employee');

module.exports = class GetAllEmployees {
  static async GetAllEmployees(req) {
    const employee = await Employee.find().populate('departmentId', '-__v');
    return employee;
  }
  static async GetAllEmployeesByDepartmentId(departmentId) {
    const employees = await Employee.find({ departmentId });
    return employees;
  }
  static async GetEmployeeById(id) {
    const employee = await Employee.findById(id).populate('departmentId', '-__v');
    if (!employee) {
      throw new Error('Empregado não encontrado');
    }
    return employee;
}
}