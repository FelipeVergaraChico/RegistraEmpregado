const GetAllDepartment = require('../services/GetAllDepartment');

module.exports = class DepartmentController {
  static async GetAllDepartments(req, res) {
    try {
      const departments = await GetAllDepartment.GetAllDepartments(req);
      return res.status(200).json(departments);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching departments: ' + error.message });
    }
  }
}