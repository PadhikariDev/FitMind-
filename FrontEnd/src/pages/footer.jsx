import React, { useState } from "react";

const socialLinks = [
    {
        name: "Instagram",
        href: "https://instagram.com",
        svg: (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
            >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-3.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
            </svg>
        ),
    },
    {
        name: "TikTok",
        href: "https://tiktok.com",
        svg: (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
            >
                <path d="M12 2a6.99 6.99 0 005.15 2.13v4.38a5.13 5.13 0 11-5.14-6.5v4.38zM6 12a6 6 0 1012 0v-.02a7.06 7.06 0 00-6-2.18v5.2a3.8 3.8 0 01-6 3.31V12z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://twitter.com",
        svg: (
            <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
            >
                <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.08 9.08 0 01-2.88 1.1A4.48 4.48 0 0016.18.25a4.5 4.5 0 00-4.5 4.5c0 .35.04.7.12 1.03A12.8 12.8 0 013 2.2a4.5 4.5 0 001.39 6 4.48 4.48 0 01-2.04-.57v.06a4.5 4.5 0 003.6 4.42 4.48 4.48 0 01-2.03.07 4.5 4.5 0 004.2 3.12A9 9 0 012 19.54 12.8 12.8 0 008.29 21c7.55 0 11.68-6.25 11.68-11.66 0-.18-.01-.35-.02-.52A8.33 8.33 0 0023 3z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            // Here you would handle the newsletter subscription logic
            setSubmitted(true);
            setEmail("");
        }
    };

    return (
        <footer className="bg-[#73946B] text-white mt-5 pt-16 pb-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Logo + Description */}
                <div>
                    <h3 className="text-3xl font-extrabold mb-4">FitMind</h3>
                    <p className="text-gray-300 max-w-sm leading-relaxed">
                        Your personal fitness companion, guiding you through every step
                        with smart workouts and nutrition.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-6">Links</h4>
                    <nav className="flex flex-col space-y-4">
                        {["About", "Contact", "Blog", "Privacy"].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                className="hover:text-[#DDA853] transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h4 className="text-xl font-semibold mb-6">Newsletter</h4>
                    {submitted ? (
                        <p className="text-green-400">Thanks for subscribing!</p>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                            <input
                                type="email"
                                aria-label="Email address"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="px-4 py-3 rounded bg-gray-900 border border-gray-700 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#DDA853]"
                            />
                            <button
                                type="submit"
                                className="bg-[#DDA853] text-black py-3 rounded font-semibold hover:bg-[#B8863D] transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    )}
                </div>

                {/* Socials + App Badges */}
                <div>
                    <h4 className="text-xl font-semibold mb-6">Follow Us</h4>
                    <div className="flex space-x-6 mb-8">
                        {socialLinks.map(({ name, href, svg }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="text-white hover:text-[#DDA853] transition-colors"
                            >
                                {svg}
                            </a>
                        ))}
                    </div>

                    <h4 className="text-xl font-semibold mb-4">Get the App</h4>
                    <div className="flex space-x-4">

                        <a
                            href="https://play.google.com/store/apps/details?id=XXXXXXXXX"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Get it on Google Play"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                                alt="Google Play Store"
                                className="h-12"
                            />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="mt-16 border-t border-gray-700 pt-8 text-center text-[#F5F5F5] text-sm">
                &copy; {new Date().getFullYear()} FitMind. All rights reserved.
            </div>
        </footer>
    );
}
