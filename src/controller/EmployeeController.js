const GetAllEmployees = require('../services/GetAllEmployees');

module.exports = class EmployeeController {
  static async GetAllEmployees(req, res) {
    try {
      const employees = await GetAllEmployees.GetAllEmployees(req);
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching employees', error: error.message });
    }
  }
}