const Employee = require("../model/Employee");
require("dotenv").config();
module.exports = class UpdateEmployeeService {
  static async UpdateEmployee(id, name, email, phone, departmentId, req, res) {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error("Empregado não encontrado");
    }

    employee.name = name || employee.name;
    employee.email = email || employee.email;
    employee.phone = phone || employee.phone;
    employee.departmentId = departmentId || employee.departmentId;

    const updatedEmployee = await employee.save();

    return updatedEmployee;
  }
};
