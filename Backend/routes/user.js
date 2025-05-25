import User from "../model/login.js";
import { Router } from "express";

const router = Router();

router.get("/signup", (req, res) => {
    res.status(200).send("Signup GET route is active");
});

router.post("/signup", async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." });
        }

        const user = new User({
            fullname, email, password
        });
        await user.save();
        res.status(201).json({ message: "new user has been created." })
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
})

export default router;


