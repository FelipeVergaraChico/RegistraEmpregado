const Employee = require('../model/Employee');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(email, password) {
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios');
    }
    try {
      const employee = await Employee.findOne({ email });
      if (!employee) {
        throw new Error('Usuário não encontrado');
      }
      const isMatch = await bcrypt.compare(password, employee.password);
      if (!isMatch) {
        throw new Error('Credenciais inválidas');
      }

      const token = jwt.sign(
        {
          id: employee._id,
          email: employee.email,
          password: employee.password,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        }
      );

      return {
        message: 'Login realizado com sucesso',
        token,
        employeeId: employee._id,
        email: employee.email,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};