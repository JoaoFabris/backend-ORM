const { Address } = require("../models");

const getAllEmployeeId = async (employeeId) => {
  const address = await Address.findAll({ where: { employeeId } });

  return address;
};

module.exports = {
    getAllEmployeeId,
}