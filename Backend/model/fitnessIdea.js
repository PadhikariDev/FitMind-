import mongoose from "mongoose";

const fitnessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    age: Number,
    gender: String,
    height: Number,
    weight: Number,
    waist: Number,
    neck: Number,
    hip: Number,
    activityLevel: String,
    goal: String,
    workoutFrequencyPerWeek: Number,
    dietType: String,
    bmi: Number,
    bmr: Number,
    tdee: Number,
    bodyFatPercentage: Number,
    recommendedCalories: Number,
}, { timestamps: true });

const status = mongoose.model("Status", fitnessSchema);

export default status