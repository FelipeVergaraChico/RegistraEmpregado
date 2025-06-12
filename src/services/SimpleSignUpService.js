const User = require('../model/User');
const validator = require('validator');
const bcrypt = require('bcrypt');
require('dotenv').config();

module.exports = class SimpleSignUpService {
  static async signUp(name, email, password) {
    if (!name || !email || !password) {
      throw new Error('Nome, e-mail e senha são obrigatórios');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error('Usuário já cadastrado com este e-mail');
    }

    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
      throw new Error('E-mail inválido');
    }

    if (!validator.isLength(password, { min: 6 })) {
      throw new Error('Senha deve ter pelo menos 6 caracteres');
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      name: name,
      email: email,
      password: passwordHash,
      role: 'user',
    });

    const newUser = await user.save();
    return newUser;
  }
}
