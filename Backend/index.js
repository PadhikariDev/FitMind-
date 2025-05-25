
import express from "express"
import dotenv from "dotenv"
import connectDB from "./connection.js";
import authRoutes from "./routes/user.js"

dotenv.config();

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
connectDB();

app.use("/api", authRoutes);

app.get("/", (req, res) => {
    res.send("API is running ...");
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
})




