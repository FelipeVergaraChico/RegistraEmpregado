const Employee = require('../model/Employee');
require('dotenv').config();
module.exports = class SearchEmployeeService {
  static async SearchEmployee (searchTerm, req, res) {
    if (!searchTerm || searchTerm.trim() === '') {
      throw new Error('Termo de pesquisa inválido');
    }

    const employees = await Employee.find({
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { email: { $regex: searchTerm, $options: 'i' } }
      ]
    }).populate('departmentId', '-__v');
    if (employees.length === 0) {
      throw new Error('Nenhum empregado encontrado');
    }

    return employees;
  }
};