import { useEffect, useState } from 'react';

const WelcomeAlert = ({ user }) => {
    const [show, setShow] = useState(true);

    // Auto-close after 6 seconds (optional)
    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 6000);
        return () => clearTimeout(timer);
    }, []);

    if (!show || !user) return null;

    return (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-white border-l-4 border-[#FF6B6B] shadow-lg rounded-xl px-6 py-4 z-50 w-[90%] max-w-xl">
            <div className="flex justify-between items-start">
                <div className="text-left">
                    <h1 className="text-2xl font-bold text-[#333333] mb-1">
                        Welcome, {user.fullname}!
                    </h1>
                    <p className="text-sm text-[#555] mb-0">
                        <strong>Email:</strong> {user.email}
                    </p>
                    <p className="text-sm text-[#555] mb-2">
                        <strong>Role:</strong> {user.role}
                    </p>
                    <p className="text-[#4ECDC4] text-sm italic">
                        👋 Welcome back! Ready to crush your fitness goals today?
                    </p>
                </div>

                {/* Close button */}
                <button onClick={() => setShow(false)} className="text-gray-500 hover:text-black text-xl font-bold ml-4">
                    ×
                </button>
            </div>
        </div>
    );
};

export default WelcomeAlert;
