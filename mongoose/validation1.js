const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb');
/*
 this example uses validation while inserting records.
 "title" is required and should be 4 - 200 characters
 "price" is required only if "onSale" is set to true
 "date" if not specified is taken as system date
*/
const gameSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 200
    },
    publisher: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    onSale: Boolean,
    price: {
        type: Number,
        required: function () { return this.onSale }
    }
});

const Game = mongoose.model('Game', gameSchema);

connection.once('connected', async () => {
    const game = new Game({
        title: "Pac",
        publisher: "Nintendo",
        tags: ["adventure", "action"],
        onSale: true,
    });
 
    try {
        const result = await game.save();
        console.log(result);
    } catch (err) {
        console.log(err.message)
    }
});