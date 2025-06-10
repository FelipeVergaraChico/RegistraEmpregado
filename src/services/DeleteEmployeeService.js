const Employee = require('../model/Employee');
require('dotenv').config();
module.exports = class DeleteEmployeeService {
  static async DeleteEmployee(id, req, res) {
    const employee = await Employee.findById(id);
    if (!employee) {
      throw new Error('Empregado não encontrado');
    }
    await Employee.deleteOne({ _id: id });
    return { message: 'Empregado deletado com sucesso' };
  }
};