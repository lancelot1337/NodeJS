import EmployeeModel from "../models/Employee";

class EmployeeService {
    getEmployees() {
        return EmployeeModel.find();
    }
}

export default new EmployeeService();