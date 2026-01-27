import { useAuth } from "../../context/AuthContext";
import LoginForm from "./LoginForm";
import RegisterForm from "./SignupForm";

const AuthModal = () => {
    const { authType, closeAuth } = useAuth();

    return (
        <>
            <div
                onClick={closeAuth}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity
                ${authType ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
            <div
                className={`fixed top-0 right-0 h-screen w-full md:w-105 bg-white z-50
                transform transition-transform duration-500
                ${authType ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* <div className="h-14 flex items-center px-6 border-b">
                    <button
                        onClick={closeAuth}
                        className="text-sm text-gray-500"
                    >
                        ✕ Close
                    </button>
                </div> */}
                <div className="h-[calc(100vh-56px)] overflow-y-auto px-6 py-4">
                    {authType === "login" && <LoginForm />}
                    {authType === "register" && <RegisterForm />}
                </div>
            </div>
        </>
    );
};

export default AuthModal;
