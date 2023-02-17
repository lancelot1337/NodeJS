import express, {Request, Response} from 'express';
import { Server, createServer } from 'http';
import { ProductRoutes } from '../routes/ProductRoutes';

const app:express.Application = express();

const server:Server = createServer(app);

// middleware
app.use(express.json()); // JSON.parse() and JSON.stringify()

// route
// GET
// http://localhost:1234/
app.get("/", (request:Request, respose:Response) => {
    respose.status(200).send("Server running at http://localhost:1234")
});

new ProductRoutes(app).configureRoutes();

server.listen(1234, () => console.log("Server Started!!!"));