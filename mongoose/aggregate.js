const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/northwind');

const productSchema = new mongoose.Schema({
    'ProductName' : String,
    'QuantityPerUnit': String,
    'CategoryID': Number,
    'UnitPrice' : Number,
    'UnitsInStock': Number
});
const Product = new mongoose.model('Product', productSchema);
async function run() {
    try{
    let docs = await Product.aggregate()
      .match({ UnitsInStock: { $gt: 0 } })
     .group({
        _id: '$CategoryID',
        "TotalPrice":{$sum:"$UnitPrice"}
      })
      .project({
        _id: 0,
        "Category": "$_id",
        "TotalPrice": 1
      });
    
      docs.sort( (d1, d2) => d2.TotalPrice - d1.TotalPrice);
    console.log(docs);
    } finally {
        connection.close();
    }
}
run();


  