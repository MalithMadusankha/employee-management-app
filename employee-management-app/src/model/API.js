import axios from "axios";

export const GetEmployees = async () =>
  await axios.get("http://localhost:5000/employee");

export const CreateEmployee = async (employee) =>
  await axios.post("http://localhost:5000/employee", employee);

export const UpdateEmployee = async (employee, id) =>
  await axios.put("http://localhost:5000/employee/" + id, employee);

export const GetEmployeeByID = async (id) =>
  await axios.get("http://localhost:5000/employee/" + id);

export const FilterEmployeeByType = async (employee_type) =>
  await axios.get("http://localhost:5000/employee/type/" + employee_type);

export const DeleteEmployeeByID = async (id) =>
  await axios.delete("http://localhost:5000/employee/" + id);
