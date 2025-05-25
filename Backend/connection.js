

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database has been connected sucessfully.");
    } catch (error) {
        console.error("Error while connecting to the database.", error);
    }
}

export default connectDB;