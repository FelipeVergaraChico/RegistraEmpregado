const GetAllDepartment = require('../services/GetAllDepartment');
const RegisterDepartmentService = require('../services/RegisterDepartmentService');

module.exports = class DepartmentController {
  static async GetAllDepartments(req, res) {
    try {
      const departments = await GetAllDepartment.GetAllDepartments(req);
      return res.status(200).json(departments);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching departments: ' + error.message });
    }
  }
  static async Register(req, res) {
    const { name, description } = req.body;

    try {
      const response = await RegisterDepartmentService.RegisterDepartment(name, description, req, res);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({ error: 'Error creating department: ' + error.message });
    }
  }
}