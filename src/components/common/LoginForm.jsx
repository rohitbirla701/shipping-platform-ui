const LoginForm = () => {
    return (
        <div className="rounded-xl overflow-hidden border border-gray-200">
            <div className="bg-orange-500 py-3">
                <h2 className="text-white text-3xl font-bold text-center">
                    Login
                </h2>
            </div>

            <div className="p-5">
                <form className="space-y-4 text-md">
                    <div className="relative">
                        <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] text-black font-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                        />
                    </div>
                    <div className="relative">
                        <label className="absolute -top-2 left-3 bg-orange-100 px-1 text-[11px] text-black font-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-orange-400"
                        />
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-orange-500 cursor-pointer">
                            Forgot Password?
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="w-80 bg-black text-md cursor-pointer text-white py-4 rounded-md font-medium transition"
                        >
                            Login
                        </button>
                    </div>
                    <p className="text-md font-medium text-center text-gray-500">
                        Don&apos;t have an account?{" "}
                        <span className="text-orange-500 cursor-pointer font-medium">
                            Register
                        </span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
