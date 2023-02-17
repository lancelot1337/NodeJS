import express, { NextFunction, Request, Response } from 'express';
import ProductController from "../controllers/ProductController";
import ProductMiddleware from '../controllers/ProductMiddleware';
export class ProductRoutes {
    constructor(private app:express.Application) {} // comes from app.ts

    configureRoutes() : express.Application {
        // http://localhost:1234/products GET and POST
        this.app.route('/products')
        .get(ProductController.listProducts)
        .post(ProductMiddleware.validateRequestProductBodyFields ,ProductController.createProduct);
        
        // GET http://localhost:1234/products/3 ==> Handling Path Parameter [ :id is called as path parameter name]
        // DELETE http://localhost:1234/products/3
        this.app.route("/products/:id")
        .all((req:Request, res: Response, next: NextFunction) => {
            console.log("middle ware function => has NextFunction as argument along with req and res");
            next(); 
        })
        .get(ProductController.getProductById)
        .delete((req:Request, res: Response) => {
            res.status(200).send("DELETE request for " + req.params.id);
        });

        return this.app;
    }
}