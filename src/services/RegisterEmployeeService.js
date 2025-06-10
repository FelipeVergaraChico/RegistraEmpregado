const Employee = require('../model/Employee');
const Department = require('../model/DepartmentModel');
const validator = require('validator');
const bcrypt = require('bcrypt');
require('dotenv').config();


function normalizePhone(phone) {
  return phone.replace(/[^\d]/g, '');
}
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

    if(!/^\+?55?\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(phone)) {
      throw new Error('Telefone inválido');
    }
    const normalizedPhone = normalizePhone(phone);
    const existingEmployeePhone = await Employee.findOne({ phone: normalizedPhone });
    if (existingEmployeePhone) {
      throw new Error('Empregado já cadastrado com este telefone');
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
      phone: normalizedPhone,
      departmentId: departmentId,
      hiredAt: new Date(),
    });

    // Save the employee to the database
    const newEmployee = await employee.save();

    return newEmployee;
  }
}