import { Document, model, Schema } from "mongoose";

// _id, _v
export  interface Employee extends Document {
    "id": number;
    "name": string;
    "username": string;
    "email": string;
    "company": string
}

const EmployeeSchema:Schema = new Schema({
    id: {
        type:Number,
        required:true
    },
    name: {
        type:String,
        required: true
    },
    username:String,
    email: String,
    company: String
});

const EmployeeModel = model("Employee", EmployeeSchema); // maps to employees collection in mongodb

export default EmployeeModel;