import User from "../model/login.js";
import { Router } from "express";
import checkForAuthenticationCookie
    from "../middleware/authentication.js";

const router = Router();

router.get("/signup", (req, res) => {
    res.status(200).send("Signup GET route is active");
});

router.get("/logout", (req, res) => {
    res.clearCookie('token', {
        path: '/', // must match cookie path
        httpOnly: true, // if set while setting cookie
        sameSite: 'lax', // or 'strict'/'none'
        secure: true     // only if HTTPS
    });
    res.status(200).send("Logout GET route is active");
})
router.get("/signin", (req, res) => {
    res.status(200).send("Signin GET route is active");
})

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

router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const token = await User.matchPasswordAndGenerateToken(email, password);
        if (!token) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: false,  // true in production with HTTPS
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000,
                path: "/",
            })
            .json({ message: "Login successful" });
    } catch (error) {
        console.error("Signin error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/home", checkForAuthenticationCookie("token"), async (req, res) => {
    if (!req.User) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const user = await User.findById(req.User._id).select("-password");
        if (!user) return res.status(404).json({ message: "User not found" });

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;


