export default function PricingSection() {
    return (
        <section
            className="py-20 px-8 max-w-6xl mx-auto rounded-xl"
            style={{ backgroundColor: "#E6FBFF" }} // light primary background
        >
            <h2
                className="text-4xl font-extrabold text-center mb-16 max-w-4xl mx-auto tracking-tight"
                style={{ color: "#333333" }}
            >
                Pricing Plans
            </h2>

            <div className="flex flex-col md:flex-row gap-10 justify-center">
                {/* Free Plan */}
                <div
                    className="flex-1 rounded-xl p-10 shadow-lg flex flex-col hover:shadow-2xl transition-shadow duration-300"
                    style={{ backgroundColor: "#73946B" }}
                >
                    <h3
                        className="text-3xl font-semibold mb-6 tracking-wide"
                        style={{ color: "#F5F5F5" }}
                    >
                        Free Plan
                    </h3>
                    <ul
                        className="mb-10 space-y-4 list-disc list-inside text-lg leading-relaxed"
                        style={{ color: "#F5F5F5" }}
                    >
                        <li>Personalized daily workouts</li>
                        <li>Progress dashboard</li>
                    </ul>
                    <button
                        disabled
                        className="mt-auto px-8 py-4 font-semibold rounded-2xl cursor-not-allowed opacity-70 text-lg tracking-wide"
                        style={{ backgroundColor: "#DDA853", color: "#5E7B56" }}
                    >
                        Free Forever
                    </button>
                </div>

                {/* Pro Plan */}
                <div
                    className="flex-1 rounded-xl p-10 shadow-lg flex flex-col border-4 border-[#DDA853] transform hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: "#73946B" }}
                >
                    <div className="flex items-center justify-between mb-8 border-b border-[#DDA853] pb-4">
                        <h3
                            className="text-3xl font-semibold tracking-wide"
                            style={{ color: "#F5F5F5" }}
                        >
                            Pro Plan
                        </h3>
                        <span
                            className="font-extrabold text-2xl tracking-tight"
                            style={{ color: "#F5F5F5" }}
                        >
                            $12/mo
                        </span>
                    </div>
                    <ul
                        className="mb-12 space-y-4 list-disc list-inside text-lg leading-relaxed"
                        style={{ color: "#F5F5F5" }}
                    >
                        <li>Smart nutrition</li>
                        <li>AI form correction</li>
                        <li>Weekly check-ins & deeper insights</li>
                    </ul>
                    <button
                        className="mt-auto px-8 py-4 font-semibold rounded-2xl hover:bg-[#5E7B56] transition-colors duration-300 text-lg tracking-wide"
                        style={{ backgroundColor: "#DDA853", color: "#5E7B56" }}
                    >
                        Try Pro Free for 7 Days
                    </button>
                </div>
            </div>
        </section>
    );
}
