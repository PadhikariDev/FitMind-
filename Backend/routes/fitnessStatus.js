import express from "express";
import Status from "../model/fitnessIdea.js"; // Your Mongoose model
const router = express.Router();



// GET /api/status/latest - get latest fitness data for logged-in user
router.get("/status/latest", async (req, res) => {
    try {
        // Find the most recent fitness status for the user, sorted by creation date
        const latestStatus = await Status.findOne({ user: req.User._id }).sort({ createdAt: -1 });

        if (!latestStatus) {
            return res.status(404).json({ message: "No fitness data found" });
        }

        res.json({ data: latestStatus });
    } catch (error) {
        console.error("Error fetching latest fitness status:", error);
        res.status(500).json({ message: "Server error" });
    }
});


// POST /api/status - Save fitness status for authenticated user
router.post("/status", async (req, res) => {
    try {
        const {
            age,
            gender,
            height,
            weight,
            waist,
            neck,
            hip,
            activityLevel,
            goal,
            workoutFrequencyPerWeek,
            dietType,
        } = req.body;

        // Validate required fields
        if (
            !age ||
            !gender ||
            !height ||
            !weight ||
            !waist ||
            !neck ||
            !activityLevel ||
            !goal
        ) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        // Convert height to meters for BMI
        const heightMeters = height / 100;

        // Calculate BMI
        const bmi = weight / (heightMeters * heightMeters);

        // Calculate BMR using Mifflin-St Jeor Equation
        let bmr;
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        // Activity level multipliers for TDEE calculation
        const multipliers = {
            sedentary: 1.2,
            lightly_active: 1.375,
            active: 1.55,
            very_active: 1.725,
        };

        // Calculate TDEE
        const tdee = bmr * (multipliers[activityLevel] || 1.2);

        // Calculate recommended calories based on goal
        let recommendedCalories = tdee;
        if (goal === "lose_weight") {
            recommendedCalories -= 500;
        } else if (goal === "gain_muscle") {
            recommendedCalories += 300;
        }

        // Calculate Body Fat Percentage (U.S. Navy Method)
        let bodyFatPercentage = null;
        if (gender === "male") {
            bodyFatPercentage =
                495 /
                (1.0324 -
                    0.19077 * Math.log10(waist - neck) +
                    0.15456 * Math.log10(height)) -
                450;
        } else if (gender === "female" && hip) {
            bodyFatPercentage =
                495 /
                (1.29579 -
                    0.35004 * Math.log10(waist + hip - neck) +
                    0.221 * Math.log10(height)) -
                450;
        }

        let status = await Status.findOne({ user: req.User._id });
        // Create new status document
        if (status) {
            // Update existing record
            status.age = age;
            status.gender = gender;
            status.height = height;
            status.weight = weight;
            status.waist = waist;
            status.neck = neck;
            status.hip = gender === "female" ? hip : null;
            status.activityLevel = activityLevel;
            status.goal = goal;
            status.workoutFrequencyPerWeek = workoutFrequencyPerWeek;
            status.dietType = dietType;
            status.bmi = bmi;
            status.bmr = bmr;
            status.tdee = tdee;
            status.bodyFatPercentage = bodyFatPercentage;
            status.recommendedCalories = recommendedCalories;

            await status.save();
        } else {
            // Create new record
            status = new Status({
                user: req.User._id,
                age,
                gender,
                height,
                weight,
                waist,
                neck,
                hip: gender === "female" ? hip : null,
                activityLevel,
                goal,
                workoutFrequencyPerWeek,
                dietType,
                bmi,
                bmr,
                tdee,
                bodyFatPercentage,
                recommendedCalories,
            });


            // Save to DB
            await status.save();

            // Send success response with saved data
            res.status(201).json({ message: "Fitness status saved", data: status });
        }
    } catch (error) {
        console.error("Error saving fitness status:", error);
        res.status(500).json({ message: "Server error" });
    }
});

export default router;
