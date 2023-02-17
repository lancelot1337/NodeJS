import { Request, Response } from "express";
import EmployeeService from "../services/EmployeeService"; // imported Object
export class EmployeeController {

    async getEmployees(req:Request, respose:Response) {
        const emps = await EmployeeService.getEmployees();
        respose.status(200).send(emps);
    }
}

export default new EmployeeController();

