const Employee = require('../model/Employee');
const Department = require('../model/DepartmentModel');
const validator = require('validator');
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = class RegisterEmployeeService {
  static async RegisterEmployee(name, email, phone, departmentId, password, req, res) {
    // Check if the employee already exists
    const existingEmployee = await Employee.findOne({ email });
    if (existingEmployee) {
      throw new Error('Empregado já cadastrado com este e-mail');
    }

    if (!name || !email || !phone || !departmentId) {
      throw new Error('Todos os campos são obrigatórios');
    }

    // Verifica se departmentId existe na tabela de departamentos
    const departmentExists = await Department.findById(departmentId);
    if (!departmentExists) {
      throw new Error('Departamento não encontrado');
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      throw new Error('E-mail inválido');
    }

    if (!validator.isLength(password, { min: 6 })) {
      throw new Error('Senha deve ter pelo menos 6 caracteres');
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Create a new employee
    const employee = new Employee({
      name: name,
      password: passwordHash,
      email: email,
      phone: phone,
      departmentId: departmentId,
      hiredAt: new Date(),
    });

    // Save the employee to the database
    const newEmployee = await employee.save();

    return newEmployee;
  }
}