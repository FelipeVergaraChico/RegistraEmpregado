const Department = require("../model/DepartmentModel");

module.exports = class SearchDepartmentService {
  static async searchDepartment(searchTerm) {
    if (
      !searchTerm ||
      typeof searchTerm !== "string" ||
      searchTerm.trim() === "" ||
      searchTerm === "undefined" ||
      searchTerm === "null"
    ) {
      throw new Error("Termo de pesquisa inválido");
    }

    const departments = await Department.find({
      $or: [
        { name: { $regex: "^" + searchTerm, $options: "i" } },
        { description: { $regex: "^" + searchTerm, $options: "i" } },
      ],
    });
    if (departments.length === 0) {
      throw new Error("Nenhum departamento encontrado");
    }
    return departments;
  }
};
