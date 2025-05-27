import React, { useState, useEffect } from "react";
import axios from "axios";

export const FitnessForm = () => {
    const [formData, setFormData] = useState({
        age: "",
        gender: "male",
        height: "",
        weight: "",
        waist: "",
        neck: "",
        hip: "",
        activityLevel: "sedentary",
        goal: "lose_weight",
        workoutFrequencyPerWeek: "",
        dietType: "balanced",
    });

    const [result, setResult] = useState({
        bmi: "--",
        bmr: "--",
        tdee: "--",
        bodyFatPercentage: "--",
        recommendedCalories: "--",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/fitness/status", formData); // Make sure axios baseURL is set
            const data = res.data.data;

            setResult({
                bmi: data.bmi.toFixed(2),
                bmr: data.bmr.toFixed(2),
                tdee: data.tdee.toFixed(2),
                bodyFatPercentage: data.bodyFatPercentage
                    ? data.bodyFatPercentage.toFixed(2)
                    : "--",
                recommendedCalories: data.recommendedCalories.toFixed(2),
            });
        } catch (err) {
            console.error("Error submitting data", err);
        }
    };

    useEffect(() => {
        const fetchLatestStatus = async () => {
            try {
                const res = await axios.get("/fitness/status/latest");
                const data = res.data.data;

                setResult({
                    bmi: data.bmi?.toFixed(2) || "--",
                    bmr: data.bmr?.toFixed(2) || "--",
                    tdee: data.tdee?.toFixed(2) || "--",
                    bodyFatPercentage: data.bodyFatPercentage?.toFixed(2) || "--",
                    recommendedCalories: data.recommendedCalories?.toFixed(2) || "--",
                });
            } catch (err) {
                console.log("No saved fitness data or error loading:", err);
            }
        };

        fetchLatestStatus();
    }, []);

    return (
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto mt-10 gap-10 px-4">
            {/* SECTION: Form + Results */}
            <section className="flex-[2] bg-[#F5F5F5] p-6 shadow-md rounded-xl font-sans">
                <h2 className="mb-6 text-[#DDA853] text-xl font-semibold">
                    Kick off with a brief check-up.
                </h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* FORM */}
                    <form
                        onSubmit={handleSubmit}
                        className="flex-1 grid grid-cols-1 gap-3 text-[#333333] text-sm"
                    >
                        {[
                            { label: "Age", name: "age", type: "number", min: 10, max: 100 },
                            { label: "Height (cm)", name: "height", type: "number", min: 50, max: 250 },
                            { label: "Weight (kg)", name: "weight", type: "number", min: 20, max: 300 },
                            { label: "Waist (cm)", name: "waist", type: "number", min: 20, max: 200 },
                            { label: "Neck (cm)", name: "neck", type: "number", min: 20, max: 100 },
                            { label: "Hip (cm)", name: "hip", type: "number", min: 20, max: 200 },
                            { label: "Workouts per week", name: "workoutFrequencyPerWeek", type: "number", min: 0, max: 14 },
                        ].map(({ label, name, type, ...rest }) => (
                            <label key={name} className="flex flex-col font-medium">
                                {label}
                                <input
                                    type={type}
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#DDA853]"
                                    {...rest}
                                />
                            </label>
                        ))}

                        {[
                            { label: "Gender", name: "gender", options: ["male", "female"] },
                            { label: "Activity Level", name: "activityLevel", options: ["sedentary", "lightly_active", "active", "very_active"] },
                            { label: "Goal", name: "goal", options: ["lose_weight", "maintain", "gain_muscle"] },
                            { label: "Diet Type", name: "dietType", options: ["balanced", "low_carb", "high_protein", "vegetarian", "vegan"] },
                        ].map(({ label, name, options }) => (
                            <label key={name} className="flex flex-col font-medium">
                                {label}
                                <select
                                    name={name}
                                    value={formData[name]}
                                    onChange={handleChange}
                                    className="mt-1 p-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#DDA853]"
                                >
                                    {options.map((option) => (
                                        <option key={option} value={option}>
                                            {option.replace(/_/g, " ")}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        ))}

                        <div className="col-span-2 text-center mt-4">
                            <button
                                type="submit"
                                className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-[#DDA853] text-white hover:bg-[#d5b37b] transition-colors duration-300"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                    {/* RESULTS */}
                    <div className="flex-1 self-start h-fit p-4 border border-gray-300 rounded-lg bg-[#73946B] text-[#F5F5F5] text-sm space-y-2">
                        <h3 className="text-lg text-center font-semibold mb-2">Your Personalized Fitness Summary.</h3>
                        <p><strong>BMI:</strong> {result.bmi}</p>
                        <p><strong>BMR:</strong> {result.bmr}</p>
                        <p><strong>TDEE:</strong> {result.tdee}</p>
                        <p><strong>Body Fat %:</strong> {result.bodyFatPercentage}</p>
                        <p><strong>Recommended Calories:</strong> {result.recommendedCalories}</p>
                    </div>
                </div>
            </section>

            {/* IMAGE RIGHTMOST */}
            <div className="flex justify-end items-end  lg:mt-0">
                <div className="w-full max-w-[450px]">
                    <img
                        src="FITMIND-AI.png"
                        alt="FitMind AI"
                        className="w-full object-contain rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};
