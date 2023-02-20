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
 app.use('/static', express.static('public'))
 app.set('views', './views') // specify the views directory
 app.set('view engine', 'ejs');

// route
// GET
// http://localhost:1234/
app.get("/", (request:Request, respose:Response) => {
    respose.status(200).send("Server running at http://localhost:1234")
});

// http://localhost:1234/productPage

app.get("/productPage", (request:Request, respose:Response) => {
    // views/products.ejs
    respose.render("products" , {
        title: "Product List",
        products: [
            { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
            { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
            { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
            { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
            { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
        ]
    })
});

new UserRoutes(app).configureRoutes();

app.use(tokenGuard); // middleware 

// security ==> only valid users can access below routes
new ProductRoutes(app).configureRoutes();
new EmployeeRoutes(app).configureRoutes();

server.listen(1234, () => console.log("Server Started!!!"));