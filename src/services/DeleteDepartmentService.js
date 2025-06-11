const Department = require('../model/DepartmentModel');
const Employee = require('../model/Employee');
require('dotenv').config();
module.exports = class DeleteDepartmentService {
  static async deleteDepartment(departmentId) {
    const department = await Department.findById(departmentId);
    if (!department) {
      throw new Error('Departamento não encontrado');
    }
    const employees = await Employee.find({ departmentId: departmentId });
    if (employees.length > 0) {
      throw new Error('Não é possível excluir o departamento, pois existem funcionários associados a ele');
    }
    await Department.deleteOne({ _id: departmentId });
    return { message: 'Departamento excluido com sucesso' };
  }
}