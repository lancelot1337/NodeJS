import Product from '../models/Product';

class ProductService {
    products: Product[ ] = [
            { "id": 1, "name": "iPhone", "price": 124447.44, "category": "mobile" },
            { "id": 2, "name": "Onida", "price": 4444.44, "category": "tv" },
            { "id": 3, "name": "OnePlus 6", "price": 98444.44, "category": "mobile" },
            { "id": 4, "name": "HDMI connector", "price": 2444.00, "category": "computer" },
            { "id": 5, "name": "Samsung", "price": 68000.00, "category": "tv" }
        ];
    
    getProducts():Promise<Product[]> {
        return new Promise( (resolve, reject) => {
            resolve(this.products);
        });
    }

    getProductById(id:number): Promise<Product|undefined> {
        return new Promise( (resolve, reject) => {
            resolve(this.products.find(p => p.id === id));
        });
    }

    getProductByCategory(category:string): Promise<Product[]|[]> {
        return new Promise( (resolve, reject) => {
            resolve(this.products.filter(p => p.category === category));
        });
    }   

    addProduct(p:Product): Promise<string> {
        return new Promise( (resolve, reject) => {
            this.products.push(p);
            resolve("Product " + p.name + " added !!!");
        });
    }
}

export default new ProductService();