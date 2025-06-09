const GetAllEmployees = require('../services/GetAllEmployees');
const RegisterEmployeeService = require('../services/RegisterEmployeeService');

module.exports = class EmployeeController {
  static async GetAllEmployees(req, res) {
    try {
      const employees = await GetAllEmployees.GetAllEmployees(req);
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employees', error: error.message });
    }
  }
  static async Register(req, res) {
    const { name, email, phone, departmentId, password } = req.body;
    
    try {
      const response = await RegisterEmployeeService.RegisterEmployee(name, email, phone, departmentId, password, req, res);
      res.status(201).json(response);
    } catch (error) {
      res.status(400).json({ message: "Erro ao criar a conta", error: error.message });
    }
  }
}