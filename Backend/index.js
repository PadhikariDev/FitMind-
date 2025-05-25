
import express from "express"
import dotenv from "dotenv"
import connectDB from "./connection.js";
import authRoutes from "./routes/user.js"
import cookieParser from "cookie-parser";
import checkForAuthenticationCookie from "./middleware/authentication.js";
import { fileURLToPath } from "url";
import path from "path";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = process.env.PORT;
const app = express();
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(checkForAuthenticationCookie("token"));
app.use("/api", authRoutes);

connectDB();

app.get("/", (req, res) => {
    res.send("API is running ...");
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
})




