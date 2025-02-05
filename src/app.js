// src/app.js

const express = require("express");

const employee = require("./controllers/employee.controller");

const app = express();

app.use(express.json());

app.get("/employees", employee.getAll);
app.get("/employees/:id", employee.getById);
app.post("/employees", employee.createEmployee);
app.put("/employees/:id", employee.updateById);
app.delete("/employees/:id", employee.deleteEmployee);

module.exports = app;
