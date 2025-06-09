const Department = require('../model/DepartmentModel');
require('dotenv').config();

module.exports = class RegisterDepartment {
  static async RegisterDepartment(name, description, req) {
    if(!name || !description) {
      throw new Error('Nome e descrição são obrigatórios');
    }
    const existingDepartment = await Department.findOne({ name: name });
    if (existingDepartment) {
      throw new Error('Departamento já cadastrado com este nome');
    }
    const department = new Department({
      name: name,
      description: description,
    });

    const newDepartment = await department.save();
    return newDepartment;
  }
}