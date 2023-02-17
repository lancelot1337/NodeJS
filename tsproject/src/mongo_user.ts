import mongoose, {Schema, model} from "mongoose";

mongoose.connect("mongodb://localhost:27017/adobe_express");

// Schema
const UserSchema = new Schema({
    name:String,
    email:{
        type:String,
        required: true
    }
});

// Model
const User = model('User', UserSchema); // Model name "User" maps to "users" collection in database

mongoose.connection.once('connected', async () => {
    try {
        await User.create([
            {name:"A", email:"a@adobe.com"},
            {name:"B", email: "b@gmail.com"},
            {name: "C", email : "c@adobe.com"},
            {name : "D", email : "me@yahoo.com"}
        ]);

        let docs = await User.find();
        docs.forEach(u => console.log(u));

    } finally {
        await mongoose.connection.close();
    }
});