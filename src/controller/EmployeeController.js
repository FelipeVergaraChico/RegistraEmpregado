const GetAllEmployees = require("../services/GetAllEmployees");
const RegisterEmployeeService = require("../services/RegisterEmployeeService");
const UpdateEmployeeService = require("../services/UpdateEmployeeService");
const DeleteEmployeeService = require("../services/DeleteEmployeeService");
const SearchEmployeeService = require("../services/SearchEmployeeService");

module.exports = class EmployeeController {
  static async GetAllEmployees(req, res) {
    try {
      const employees = await GetAllEmployees.GetAllEmployees(req);
      res.status(200).json(employees);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching employees", error: error.message });
    }
  }
  static async GetAllEmployeesByDepartmentId(req, res) {
    const { departmentId } = req.params;

    try {
      const employees = await GetAllEmployees.GetAllEmployeesByDepartmentId(
        departmentId
      );
      res.status(200).json(employees);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching employees", error: error.message });
    }
  }
  static async GetEmployeeById(req, res) {
    const { id } = req.params;

    try {
      const employee = await GetAllEmployees.GetEmployeeById(id);
      res.status(200).json(employee);
    } catch (error) {
      res
        .status(404)
        .json({ message: "Empregado não encontrado", error: error.message });
    }
  }
  static async Register(req, res) {
    const { name, email, phone, departmentId, password } = req.body;

    try {
      const response = await RegisterEmployeeService.RegisterEmployee(
        name,
        email,
        phone,
        departmentId,
        password,
        req,
        res
      );
      res.status(201).json(response);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao criar a conta", error: error.message });
    }
  }
  static async UpdateEmployee(req, res) {
    console.log("req params:", req.params);
    const { id } = req.params;
    const { name, email, phone, departmentId } = req.body;

    try {
      const response = await UpdateEmployeeService.UpdateEmployee(
        id,
        name,
        email,
        phone,
        departmentId,
        req,
        res
      );
      res.status(200).json(response);
    } catch (error) {
      res
        .status(400)
        .json({
          message: "Erro ao atualizar o empregado",
          error: error.message,
        });
    }
  }
  static async DeleteEmployee(req, res) {
    const { id } = req.params;

    try {
      const response = await DeleteEmployeeService.DeleteEmployee(id, req, res);
      res.status(200).json(response);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Erro ao deletar o empregado", error: error.message });
    }
  }
  static async SearchEmployee(req, res) {
    const { searchTerm } = req.query;

    try {
      const employees = await SearchEmployeeService.SearchEmployee(
        searchTerm,
        req,
        res
      );
      res.status(200).json(employees);
    } catch (error) {
      res
        .status(404)
        .json({ message: "Nenhum empregado encontrado", error: error.message });
    }
  }
};
