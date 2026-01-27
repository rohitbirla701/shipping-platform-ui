import { useState } from "react";
import LoginForm from "../common/LoginForm";
import RegisterForm from "../common/SignupForm";

const Navbar = ({ authType, setAuthType }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems = [
        { label: "Product", id: "hero" },
        { label: "Platform", id: "why-xyz" },
        { label: "Pricing", id: "pricing" },
        { label: "Partner", id: "testimonials" },
        { label: "Track Order", id: "how-it-works" },
        { label: "Resources", id: "integrations" },
    ];



    return (
        <>
            <nav className="fixed top-5 left-0 w-full z-50 ">
                <div className="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 md:px-6">
                    <div className="text-3xl md:text-5xl font-bold text-orange-500 cursor-pointer">
                        Swayamship
                    </div>
                    <div className="flex gap-14">
                        <ul className="hidden md:flex items-center gap-6 text-xl font-medium text-gray-700">
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() =>
                                        document
                                            .getElementById(item.id)
                                            ?.scrollIntoView({ behavior: "smooth" })
                                    }
                                    className="cursor-pointer hover:text-orange-500 transition"
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>


                        <div className="hidden md:flex items-center gap-6">
                            <button
                                onClick={() => setAuthType("login")}
                                className="border border-orange-500 cursor-pointer font-semibold px-7 py-2 rounded-md text-md hover:bg-orange-500 hover:text-white transition"
                            >
                                Login
                            </button>
                            <button
                                onClick={() => setAuthType("register")}
                                className="border border-orange-500 px-7 py-2 cursor-pointer font-semibold rounded-md text-md hover:bg-orange-500 hover:text-white transition"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        ☰
                    </button>
                </div>
            </nav>
            <div
                className={`fixed inset-0 z-40 bg-white transition-transform duration-300 md:hidden
        ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 mt-20">
                    <ul className="flex flex-col gap-4 text-lg font-medium text-gray-700">
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => {
                                    document
                                        .getElementById(item.id)
                                        ?.scrollIntoView({ behavior: "smooth" });
                                    setMobileOpen(false);
                                }}
                                className="cursor-pointer"
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>


                    <div className="mt-8 flex flex-col gap-4">
                        <button
                            onClick={() => {
                                setAuthType("login");
                                setMobileOpen(false);
                            }}
                            className="border border-orange-500 py-3 w-60 rounded-md hover:bg-orange-500 hover:text-white"
                        >
                            Login
                        </button>
                        <button
                            onClick={() => {
                                setAuthType("register");
                                setMobileOpen(false);
                            }}
                            className="border border-orange-500 py-3 w-60 rounded-md hover:bg-orange-500 hover:text-white"
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            {authType && (
                <div
                    onClick={() => setAuthType(null)}
                    className="fixed inset-0 z-30"
                />
            )}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`fixed top-24 right-6 md:right-24 z-40 w-[90%] md:w-105 bg-orange-100 rounded-2xl shadow-2xl transition-all duration-500
                        ${authType
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-20 pointer-events-none"}`}
            >
                {authType === "login" && <LoginForm />}
                {authType === "register" && <RegisterForm />}
            </div>
        </>
    );
};

export default Navbar;
