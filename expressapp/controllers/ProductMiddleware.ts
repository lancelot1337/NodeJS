import {NextFunction, Request, Response} from 'express';
class ProductMiddleware {
   async validateRequestProductBodyFields(req: Request, res: Response, next: NextFunction) {
        if(req.body && req.body.name && req.body.price) {
            next();
        } else {
            res.status(400).send({"Error": "Missing product fields!!!"});
        }
    }
}

export default new ProductMiddleware();