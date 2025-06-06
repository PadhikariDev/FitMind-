
import express from "express"
import dotenv from "dotenv"
import connectDB from "./connection.js";
import authRoutes from "./routes/user.js"
import statusRoutes from "./routes/fitnessStatus.js"
import cookieParser from "cookie-parser";
import checkForAuthenticationCookie from "./middleware/authentication.js";
import { fileURLToPath } from "url";
import path from "path";
import cors from "cors"

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PORT = process.env.PORT;

const app = express();
app.use(cors({
    origin: "http://localhost:5173",  // your React frontend URL
    credentials: true                 // allow cookies/auth credentials
}));
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(checkForAuthenticationCookie("token"));
app.use("/api", authRoutes);
app.use("/fitness", statusRoutes);

connectDB();

app.get("/", (req, res) => {
    res.send("API is running ...");
})

app.listen(PORT, () => {
    console.log(`server is running on port : ${PORT}`);
})




