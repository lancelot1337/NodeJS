import EmployeeModel from "../models/Employee";

class EmployeeService {
    getEmployees() {
        return EmployeeModel.find();
    }

    // task to insert employees and delete employee based on "id" or "email"; update employee
}

export default new EmployeeService();