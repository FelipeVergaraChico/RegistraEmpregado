const SimpleSignUpService = require('../services/SimpleSignUpService');
const AdminSignUpService = require('../services/AdminSignUpService');
module.exports = class SignUpController {
  static async SignUp(req, res) {
    const { name, email, password } = req.body;

    try {
      const response = await SimpleSignUpService.signUp(name, email, password);
      res.status(201).json(response);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao cadastrar usuário", error: error.message });
    }
  }
  static async AdminSignUp(req, res) {
    const { name, email, password, role } = req.body;

    try {
      const response = await AdminSignUpService.signUp(name, email, password, role);
      res.status(201).json(response);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao cadastrar usuário", error: error.message });
    }
  }
};