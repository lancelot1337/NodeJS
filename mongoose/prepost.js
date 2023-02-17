const mongoose = require('mongoose');
const { connection } = mongoose;
mongoose.connect('mongodb://localhost:27017/mydb');

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

  userSchema.pre('save', function (next) {
    let now = Date.now()
    this.updatedAt = now
    // Set a value for createdAt only if it is null
    if (!this.createdAt) {
      this.createdAt = now
    }
    // Call the next function in the pre-save chain
    next()    
  });

  userSchema.post('save', function() {
    console.log(this.firstName +" saved !!!");
  });

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






