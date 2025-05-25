
import mongoose, { Schema } from "mongoose";
import { createHmac, randomBytes } from 'crypto';
import { createTokenForUser } from "../services/authentication.js"

const loginSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String,
    },
    password: {
        type: String,
        required: true
    }, profileImageUrl: {
        type: String,
        default: ""
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    }
}, { timestamps: true });

//presave middleware
loginSchema.pre('save', function (next) {
    const User = this;

    if (!User.isModified("password")) return next();
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt).update(User.password).digest('hex');
    this.salt = salt;
    this.password = hashedPassword;
    next();
});

loginSchema.static('matchPasswordAndGenerateToken', async function (email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("User not found.");
    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHmac('sha256', salt).update(password).digest('hex');
    if (hashedPassword !== userProvidedHash) throw new Error("Password is incorrect.");
    const token = createTokenForUser(user);
    return token;

})

const user = mongoose.model("User", loginSchema);
export default user;
