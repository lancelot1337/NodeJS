const mongoose = require('mongoose');
const {Schema}  = require('mongoose');

var breakfastSchema = new Schema({
    eggs: {
      type: Number,
      min: [6, 'Too few eggs'],
      max: 12
    },
    bacon: {
      type: Number,
      required: [true, 'Why no bacon?']
    },
    drink: {
      type: String,
      enum: ['Coffee', 'Tea'],
      required: function() {
        return this.bacon > 3;
      }
    }
  });
  var Breakfast = mongoose.model('Breakfast', breakfastSchema);
  
  var badBreakfast = new Breakfast({
    eggs: 2,
    bacon: 0,
    drink: 'Milk'
  });

  var error = badBreakfast.validateSync();

  for(let props in error.errors) {
      console.log(error.errors[props].message);
  }
