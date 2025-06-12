const UserLoginService = require('../services/UserLoginService');
const EmployeeLoginService = require('../services/EmployeeLoginService');

module.exports = class LoginController {
    static async Login(req, res) {
    const { email, password } = req.body;

    try {
      const response = await UserLoginService.login(email, password);
      res.status(200).json(response);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao fazer login", error: error.message });
    }
  }
    static async EmployeeLogin(req, res) {
        const { email, password } = req.body;

        try {
            const response = await EmployeeLoginService.login(email, password);
            res.status(200).json(response);
        } catch (error) {
            res
                .status(400)
                .json({ message: "Erro ao fazer login", error: error.message });
        }
    }

}