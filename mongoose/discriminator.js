const mongoose = require('mongoose');
const { connection, Schema } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true});

const productSchema = new Schema({
    imageURL: String,
    name: String
}, { discriminatorKey: '__type' });

const Product = mongoose.model('Product', productSchema);
const Book = Product.discriminator('Book', new Schema({
    author: String
}));

const Computer = Product.discriminator('Computer', new Schema({
    ramGB: Number
}));

connection.once('connected', async () => {
    try {
        await Book.create({ 
            'name': 'NodeJs',
            'imageURL': 'http://localhost:3000/img/node.png', 
            'author': 'Anonymous' });
        await Computer.create({ 
            'name': 'HP Laptop', 
            'imageURL': 'http://localhost:3000/img/hp.png', 
            'ramGB': 512 });
    } finally {
        await connection.close();
    }
});






