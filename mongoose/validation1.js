const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb');

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