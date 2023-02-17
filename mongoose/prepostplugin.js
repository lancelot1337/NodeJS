const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb');

    const timestamp = require('./plugins/timestamp');

    let userSchema = new mongoose.Schema({
        firstName: String,
        lastName: String,
        createdAt: Date,
        updatedAt: Date
    });

  userSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName
  })
  
  userSchema.virtual('fullName').set(function(name) {
    let str = name.split(' ')
    
    this.firstName = str[0]
    this.lastName = str[1]
  })

  userSchema.plugin(timestamp);

    let UserModel = mongoose.model('User', userSchema);
    let userObj = new UserModel({
        fullName: 'Rahul Banuprakash'
    });

  
    connection.once('connected', async () => {
        try {
            // await userObj.save();
            await UserModel.create({
                "fullName": "Kavitha Banuprakash"
            });
        } finally {
            await connection.close();
        }
    });






