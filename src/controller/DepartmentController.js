const GetAllDepartment = require('../services/GetAllDepartment');
const RegisterDepartmentService = require('../services/RegisterDepartmentService');
const UpdateDepartmentService = require('../services/UpdateDepartmentService');
const DeleteDepartmentService = require('../services/DeleteDepartmentService');
const SearchDepartmentService = require('../services/SearchDepartmentService');

module.exports = class DepartmentController {
  static async GetAllDepartments(req, res) {
    try {
      const departments = await GetAllDepartment.getAllDepartments(req);
      return res.status(200).json(departments);
    } catch (error) {
      return res.status(500).json({ error: 'Error fetching departments: ' + error.message });
    }
  }
  static async GetDepartmentById(req, res) {
    const { departmentId } = req.params;

    try {
      const department = await GetAllDepartment.getDepartmentById(departmentId);
      return res.status(200).json(department);
    } catch (error) {
      return res.status(404).json({ error: 'Department not found: ' + error.message });
    }
  }
  static async Register(req, res) {
    const { name, description } = req.body;

    try {
      const response = await RegisterDepartmentService.registerDepartment(name, description, req, res);
      return res.status(201).json(response);
    } catch (error) {
      return res.status(400).json({ error: 'Error creating department: ' + error.message });
    }
  }
  static async UpdateDepartment(req, res) {
    const { departmentId } = req.params;
    const { name, description } = req.body;

    try {
      const updatedDepartment = await UpdateDepartmentService.UpdateDepartment(departmentId, name, description);
      return res.status(200).json(updatedDepartment);
    } catch (error) {
      return res.status(400).json({ error: 'Error updating department: ' + error.message });
    }
  }
  static async DeleteDepartment(req, res) {
    const { departmentId } = req.params;

    try {
      const response = await DeleteDepartmentService.deleteDepartment(departmentId);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(400).json({ error: 'Error deleting department: ' + error.message });
    }
  }
  static async SearchDepartment(req, res) {
    const { searchTerm } = req.query;

    try {
      const departments = await SearchDepartmentService.searchDepartment(searchTerm);
      return res.status(200).json(departments);
    } catch (error) {
      return res.status(400).json({ error: 'Error searching department: ' + error.message });
    }
  }
}