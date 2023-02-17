const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb');

const User = mongoose.model('User', mongoose.Schema({
    email: String
}));

connection.once('connected', async () => {
    try {
        await User.create([
            { email: 'banu@google.com' },
            { email: 'kavitha@microsoft.com' },
            { email: 'rahul@gmail.com' },
            { email: 'gmail@google.com' }
          ]);
        let docs = await User.find({ email: /gmail/ });
        // Equivalently, you can use the $regex operator.
        // let docs = await User.find({ email: { $regex: 'gmail' } });
        docs.length; // 2
        docs = docs.map(doc => doc.email).sort()
        docs.forEach(email => console.log(email));
    } finally {
        await connection.close();
    }
});






