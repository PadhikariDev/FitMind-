import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/signin", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials: "include",
            });
            const data = await res.json();
            if (res.ok) {
                alert("signin Successfull!");
                navigate("/home");
            } else {
                alert(data.message || "Invalid Credentials")
            }

        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred during signin.");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] px-4 py-8">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-200">
                <Link to="/" className="block text-center mb-6">
                    <div className="text-3xl font-bold text-[#DDA853] hover:text-[#debc72] transition">
                        FitMind<span className="text-[#333333]">-AI</span>
                    </div>
                </Link>

                <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    Welcome Back
                </h2>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#DDA853] text-white py-2 rounded-lg hover:bg-[#debc72] hover:cursor-pointer transition font-semibold shadow-md"
                >
                    Log In
                </button>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-blue-600 hover:underline">
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
}
