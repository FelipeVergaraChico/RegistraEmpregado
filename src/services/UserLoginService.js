const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async login(email, password) {
    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios');
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Credenciais inválidas');
      }

      const token = jwt.sign(
        {
          id: user._id,
          email: user.email,
          role: user.role
        },
        process.env.JWT_SECRET,
        {
          expiresIn: '7d',
        }
      );

      return {
        message: 'Login realizado com sucesso',
        token,
        userId: user._id,
        email: user.email,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};