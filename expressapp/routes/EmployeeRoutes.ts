import express, { NextFunction, Request, Response } from 'express';
import EmployeeController from "../controllers/EmployeeController";

export class EmployeeRoutes {
    constructor(private app:express.Application) {} // comes from app.ts

    configureRoutes() : express.Application {
        this.app.route('/employees')
        .get(EmployeeController.getEmployees)
        return this.app;
    }
}