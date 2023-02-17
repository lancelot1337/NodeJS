import { Request, Response } from "express";
import ProductService from "../services/ProductService"; // imported Object
export class ProductController {

    async listProducts(req:Request, respose:Response) {
        const products = await ProductService.getProducts();
        respose.status(200).send(products);
    }

    // http://localhost:1234/products/3
    async getProductById(req:Request, response:Response) {
        const product = await ProductService.getProductById(+req.params.id);
        response.status(200).send(product);
    }

    // http://localhost:1234/products
    // payload {"name": .., "price": ...}
    async createProduct(request:Request, response:Response) {
        const msg = await ProductService.addProduct(request.body);
        response.status(201).send(msg);
    }
}

export default new ProductController();