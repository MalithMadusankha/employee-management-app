import {
  CreateEmployee,
  DeleteEmployeeByID,
  FilterEmployeeByType,
  GetEmployees,
  UpdateEmployee,
} from "../model/API";

export default async function GetEmployeeHandler() {
  try {
    const res = await GetEmployees();
    if (res) return res.data;
  } catch (error) {}
}

export async function FilterEmployeeHandler(employee_type) {
  try {
    const res = await FilterEmployeeByType(employee_type);
    if (res) return res.data;
  } catch (error) {}
}

export async function CreateEmployeeHandler(Employee) {
  const res = await CreateEmployee(Employee);
  return res.data;
}

export async function UpdateEmployeeHandler(Employee, id) {
  const res = await UpdateEmployee(Employee, id);
  return res.data;
}

export async function DeleteEmployeeHandler(id) {
  const res = await DeleteEmployeeByID(id);
  return res.data;
}
