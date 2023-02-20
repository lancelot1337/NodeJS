import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import { Server, createServer } from 'http';
import { EmployeeRoutes } from '../routes/EmployeeRoutes';
import { ProductRoutes } from '../routes/ProductRoutes';
import { UserRoutes } from '../routes/UserRoutes';
import { tokenGuard } from '../services/token.guard';


mongoose.connect("mongodb://localhost:27017/adobe_express");

const app:express.Application = express();

const server:Server = createServer(app);

// middleware
app.use(express.json());
 // JSON.parse() and JSON.stringify()

// route
// GET
// http://localhost:1234/
app.get("/", (request:Request, respose:Response) => {
    respose.status(200).send("Server running at http://localhost:1234")
});


new UserRoutes(app).configureRoutes();

app.use(tokenGuard); // middleware 

// security ==> only valid users can access below routes
new ProductRoutes(app).configureRoutes();
new EmployeeRoutes(app).configureRoutes();

server.listen(1234, () => console.log("Server Started!!!"));