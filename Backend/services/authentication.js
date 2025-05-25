
import JWT from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const superKey = process.env.SECRETE_KEY;

function createTokenForUser(User) {
    const payload = {
        _id: User._id,
        fullname: User.fullname,
        email: User.email,
        profileImageUrl: User.profileImageUrl,
        role: User.role
    };
    const token = JWT.sign(payload, superKey);
    return token;
}

function validateToken(token) {
    const payload = JWT.verify(token, superKey);
    return payload;
}

export {
    createTokenForUser, validateToken
}