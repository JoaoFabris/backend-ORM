// src/services/employee.service.js

const { Address, Employee } = require("../models");

const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: "addresses" }, // relacionamento dado como as no employee model com 'address'
  });

  return users;
};

const getById = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    /* include: [{ model: Address, as: "addresses", attributes: { exclude: ['number']} }], */
  });
  return employee;
};

const createEmployee = async ({ firstName, lastName, age }) => {
  const create = await Employee.create({ firstName, lastName, age });
  return create;
};

const updateById = async (id, data) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    return null;
  }

  await Employee.update(data, { where: { id } });

  return true;
};

const deleteEmployee = async (id) => {
  const employee = await Employee.findByPk(id);

  if (!employee) {
    return null;
  }

  await Employee.destroy({ where: { id } });

  return true;
};

module.exports = {
  getAll,
  getById,
  createEmployee,
  updateById,
  deleteEmployee,
};
