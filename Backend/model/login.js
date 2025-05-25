
import mongoose, { Schema } from "mongoose";


const loginSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });


const user = mongoose.model("User", loginSchema);
export default user;
