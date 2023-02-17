const mongoose = require('mongoose');
const {Schema}  = require('mongoose');

var userSchema = new Schema({
    phone: {
      type: String,
      validate: {
        validator: function(v) {
          return /\d{3}-\d{3}-\d{4}/.test(v);
        },
        message: props => `${props.value} is not a valid phone number!`
      },
      required: [true, 'User phone number required']
    }
  });
  
  var User = mongoose.model('user', userSchema);
  var user = new User();
  var error;
  
  user.phone = '555.0123';
  error = user.validateSync();
  console.log(error.errors['phone'].message);//   '555.0123 is not a valid phone number!'
  
  