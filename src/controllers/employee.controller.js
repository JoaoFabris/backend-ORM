// src/controllers/employee.controller.js

const EmployeeService = require("../services/employee.service");
const AddressService = require("../services/address.service");

const getAll = async (_req, res) => {
  try {
    const employees = await EmployeeService.getAll();
    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Ocorreu um erro" });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await EmployeeService.getById(id);

    if (!employee) {
      res.status(404).json({ message: "id not found" });
    }

    if (req.query.includeAddresses === "true") { // lazy loading, buscando na requisição localhost:3002/employees/1?includeAddresses=false ou true 
      const addresses = await AddressService.getAllEmployeeId(id);
      return res.status(200).json({ employee, addresses });
    }
    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "unknown error" });
  }
};

const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, age } = req.body;
    const create = await EmployeeService.createEmployee({
      firstName,
      lastName,
      age,
    });
    return res.status(201).json(create);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: "Error " });
  }
};

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const update = await EmployeeService.updateById(id, {
      firstName,
      lastName,
      age,
    });

    if (!update) {
      res.status(404).json({ message: "employee not found" });
    }

    return res.status(200).json({ message: "Employee updated" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Error" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteEmployee = await EmployeeService.deleteEmployee(id);

    if (!deleteEmployee) {
      res.status(404).json({ message: "employee not found" });
    }

    return res.status(200).json({ message: "deleted employee" });
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: "Error" });
  }
};

module.exports = {
  getAll,
  getById,
  createEmployee,
  updateById,
  deleteEmployee,
};
